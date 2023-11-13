import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { UsuariosController } from './../controllers'

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Lezgoo Strixhaven' });
})

router.get('/usuarios', UsuariosController.getAllValidation, UsuariosController.getAll);
router.post('/usuarios', UsuariosController.createValidation, UsuariosController.create);
router.get('/usuarios/:UserID', UsuariosController.getByIdValidation, UsuariosController.getById);
router.put('/usuarios/:UserID', UsuariosController.updateByIdValidation, UsuariosController.updateById);
router.delete('/usuarios/:UserID', UsuariosController.deleteByIdValidation, UsuariosController.deleteById);

export { router };