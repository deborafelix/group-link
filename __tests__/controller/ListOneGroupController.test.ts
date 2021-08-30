import faker from 'faker';
import { Connection, createConnection, getMongoRepository } from 'typeorm';
import ListOneGroupController from '../../src/controllers/ListOneGroupController';
import Link from '../../src/entities/Link';
import ListOneGroupService from '../../src/services/ListOneGroupService';
import createLink from '../utils/createLink';

describe('List One Group Controller', () => {
  const spy = jest.spyOn(ListOneGroupService.prototype, 'execute');
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
  });
  afterAll(async () => {
    await connection.close();
  });
  it('should list all links for one group', async () => {
    const payload = {
      params: {
        group: faker.random.word(),
      },
    };
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

    const sut = new ListOneGroupController(new ListOneGroupService(getMongoRepository(Link)));
    const result = await sut.handle(payload);
    expect(result).toBeDefined();
    expect(result).toHaveProperty('body');
    expect(result.body.length).toBeGreaterThan(0);
  });
});
