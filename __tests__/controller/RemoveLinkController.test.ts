import faker from 'faker';
import { Connection, createConnection, getMongoRepository } from 'typeorm';
import RemoveLinkController from '../../src/controllers/RemoveLinkController';
import Link from '../../src/entities/Link';
import RemoveLinkService from '../../src/services/RemoveLinkService';

describe('Remove Link Controller', () => {
  const spy = jest.spyOn(RemoveLinkService.prototype, 'execute');
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
  });
  afterAll(async () => {
    await connection.close();
  });

  it('should remove the link', async () => {
    const payload = {
      params: {
        id: faker.datatype.uuid(),
      },
    };
    spy.mockResolvedValue();

    const sut = new RemoveLinkController(new RemoveLinkService(getMongoRepository(Link)));
    const result = await sut.handle(payload);
    expect(result.statusCode).toBe(204);
  });

  it('should not remove the link because missing id', async () => {
    const payload = {
      params: {},
    };
    spy.mockResolvedValue();

    const sut = new RemoveLinkController(new RemoveLinkService(getMongoRepository(Link)));
    const result = await sut.handle(payload);
    expect(result.statusCode).toBe(400);
  });
});
