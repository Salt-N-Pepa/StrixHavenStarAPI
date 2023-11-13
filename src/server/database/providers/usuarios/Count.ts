import { ETableNames } from "../../ETableNames";
import { Knex } from "../../knex";
import { IUsuario } from "../../models";

export const count = async (filter = ''): Promise<number | Error> => {
  try {
    const [{ count }] = await Knex(ETableNames.usuario)
      .where('FirstName', 'like', `%${filter}%`)
      .count<[{ count: number }]>('* as count');

    if ( Number.isInteger(Number(count))) return Number(count);

    return new Error('Erro ao consultar a quantidade de registro');
  } catch (error) {
    console.log(error)
    return new Error('Erro ao consultar a quantidade de registro');
  }
}