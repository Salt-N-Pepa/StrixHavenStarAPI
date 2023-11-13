import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";

export const getAll = async (UserID: number, page: number, limit: number, filter: string): Promise<IUsuario[] | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .select('*')
      .where('UserID', Number(UserID))
      .orWhere('FirstName', 'like', `%${filter}%`)
      .offset((page - 1) * limit)
      .limit(limit);

    if (UserID > 0 && result.every(item => item.UserID !== UserID)) {
      const resultById = await Knex(ETableNames.usuario)
      .select('*')
      .where('UserID', '=', UserID)
      .first();

      if (resultById) return [...result, resultById];
    }

    return result;
  } catch (error) {
    console.log(error)
    return new Error('Erro ao consultar os registros');
  }
}