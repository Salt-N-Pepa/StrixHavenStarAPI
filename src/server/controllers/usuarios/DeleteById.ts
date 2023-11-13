import { Request, RequestHandler, Response } from "express"
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../shared/middleware";
import { UsuariosProvider } from "../../database/providers/usuarios";

interface IParamsProps {
  UserID?: number;
}

export const deleteByIdValidation = validation((getSchema) => ({
  params: getSchema<IParamsProps>(
    yup.object().shape({
      UserID: yup.number().integer().optional().moreThan(0),
    })
  ),
}));

export const deleteById = async (req: Request<IParamsProps>, res: Response) => {
  if (!req.params.UserID) {
    return res.status(StatusCodes.BAD_GATEWAY).json({
      errors: {
        default: 'O parâmetro "UserID" precisa ser informado.'
      }
    });
  }

  const result = await UsuariosProvider.deleteById(req.params.UserID);
  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.NO_CONTENT).send();
}