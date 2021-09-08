import faker from 'faker';
import { Connection, createConnection, getMongoRepository } from 'typeorm';
import ListAllLinksController from '../../src/controllers/ListAllLinksController';
import Link from '../../src/entities/Link';
import ListAllLinksService from '../../src/services/ListAllLinksService';
import createLink from '../utils/createLink';

describe('List All Links Controller', () => {
  const spy = jest.spyOn(ListAllLinksService.prototype, 'execute');
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
  });
  afterAll(async () => {
    await connection.close();
  });
  it('should list all links', async () => {
    spy.mockResolvedValue([{
      id: faker.datatype.uuid(),
      ...createLink(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: faker.datatype.uuid(),
      ...createLink(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

    const sut = new ListAllLinksController(new ListAllLinksService(getMongoRepository(Link)));
    const result = await sut.handle({});
    expect(result).toBeDefined();
    expect(result).toHaveProperty('body');
    expect(result.body.length).toBeGreaterThan(0);
  });
});
