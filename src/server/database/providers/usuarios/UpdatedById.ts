import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";

export const updatedById = async (UserID: number, usuario: Omit<IUsuario, 'UserID'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.usuario)
      .update(usuario)
      .where('UserID', '=', UserID)

    if ( result > 0 ) return;

    return new Error('Erro ao atualizar o registro');
  } catch (error) {
    console.log(error)
    return new Error('Erro ao atualizar o registro');
  }
}