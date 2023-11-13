import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";

export const deleteById = async (UserID: number): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .where('UserID', '=', UserID)
      .del();

    if ( result > 0) return;

    return new Error('Erro ao deletar o registro');
  } catch (error) {
    console.log(error)
    return new Error('Erro ao deletar o registro');
  }
}