import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';

export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETableNames.usuario, table => {
      table.bigIncrements('UserID').primary().index();
      table.string('FirstName', 50).checkLength('<=', 50).index().notNullable();
      table.string('LastName', 50).checkLength('<=', 50);
      table.string('UserName', 50).checkLength('<=', 50).notNullable().unique();

      table.timestamps(true, true);
      table.comment('Tabela de usuário dã')
    })
    .then(() => {
      console.log(`# Created Table ${ETableNames.usuario}`)
    })

}
export async function down(knex: Knex) {
  return knex.schema
    .dropTable(ETableNames.usuario)
    .then(() => {
      console.log(`# Dropped Table ${ETableNames.usuario}`)
    })
}