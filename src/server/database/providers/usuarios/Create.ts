import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";

export const create = async (usuario: Omit<IUsuario, 'UserID'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.usuario).insert(usuario).returning('UserID');

    if (typeof result === 'object') {
      return result.UserID;
    } else if (typeof result === 'number') {
      return result;
    }

    return new Error('Erro ao cadastrar o registro');
  } catch (error) {
    console.log(error)
    return new Error('Erro ao cadastrar o registro');
  }
}