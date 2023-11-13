import * as create from './Create';
import * as getAll from './GetAll';
import * as getById from './GetById';
import * as deleteById from './DeleteById';
import * as updatedById from './UpdatedById';
import * as count from './Count';

export const UsuariosProvider = {
  ...create,
  ...getAll,
  ...getById,
  ...updatedById,
  ...deleteById,
  ...count
}