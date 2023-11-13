import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";

export const getById = async (UserID: number): Promise<IUsuario | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .select('*')
      .where('UserID', '=', UserID)
      .first();

    if ( result ) return result;

    return new Error('Registro não encontrado');
  } catch (error) {
    console.log(error)
    return new Error('Erro ao consultar o registro');
  }
}