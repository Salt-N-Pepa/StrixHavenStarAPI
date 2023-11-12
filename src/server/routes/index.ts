import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { UsuariosController } from './../controllers'

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Lezgoo Strixhaven'});
})

router.post(
  '/usuarios', 
  UsuariosController.createValidation, 
  UsuariosController.create);

export { router };