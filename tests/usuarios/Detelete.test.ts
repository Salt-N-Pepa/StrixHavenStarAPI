import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe('Cidades - DeleteById', () => {


  it('Apaga registro', async () => {
    const res1 = await testServer
      .post('/usuarios')
      .send({ name: 'Felisa Fang' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    
    const resApagada = await testServer
      .delete(`/cidade/${res1.body}`)
      .send()
    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT)
  })
  it('Tenta apagar registro que não existe', async () => {
    const res1 = await testServer
      .delete('/usuarios/999999999')
      .send();

    expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res1.body).toHaveProperty('errors.default');
  })
});


