import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { IUsuario } from "../../database/models";
import { UsuariosProvider } from "../../database/providers/usuarios";

interface IParamsProps {
  UserID?: number;
}

interface IBodyProps  extends Omit<IUsuario, 'UserID'>{}

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(
    yup.object().shape({
      FirstName: yup.string().required().min(5),
      LastName: yup.string().optional().min(5),
      UserName: yup.string().required().min(5),
    })
  ),
  params: getSchema<IParamsProps>(
    yup.object().shape({
      UserID: yup.number().integer().optional().moreThan(0),
    })
  ),
}));

export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {
  if (!req.params.UserID) {
    return res.status(StatusCodes.BAD_GATEWAY).json({
      errors: {
        default: 'O parâmetro "UserID" precisa ser informado.'
      }
    });
  }

  const result = await UsuariosProvider.updatedById(req.params.UserID, req.body);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.NO_CONTENT).send('Nop!!');
}