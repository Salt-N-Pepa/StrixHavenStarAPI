import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe('Cidades - Create', () => {


  it('Cria registro', async () => {
    const res1 = await testServer
      .post('/usuarios')
      .send({ name: 'Felisa Fang' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  })
  // it('Tente criar um nome curto', async () => {
  //   const res1 = await testServer
  //     .post('/usuarios')
  //     .send({ name: 'Fel' });

  //   expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  //   expect(res1.body).toHaveProperty('errors.body.name');
  // })
});


