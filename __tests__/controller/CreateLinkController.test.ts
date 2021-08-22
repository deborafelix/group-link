import faker from 'faker';
import { Connection, createConnection, getMongoRepository } from 'typeorm';
import CreateLinkController from '../../src/controllers/CreateLinkController';
import Link from '../../src/entities/Link';
import CreateLinkService from '../../src/services/CreateLinkService';

describe('Create Link Controller', () => {
  const spy = jest.spyOn(CreateLinkService.prototype, 'execute');
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
  });
  afterAll(async () => {
    await connection.close();
  });

  it('should create a link', async () => {
    const payload = {
      body: {
        group: faker.random.word(),
        url: faker.internet.url(),
      },
    };
    spy.mockResolvedValue({
      id: faker.datatype.uuid(),
      group: payload.body.group,
      url: payload.body.url,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const sut = new CreateLinkController(new CreateLinkService(getMongoRepository(Link)));
    const result = await sut.handle(payload);
    expect(result).toBeDefined();
  });

  it('should not create a link if already exists', async () => {
    const payload = {
      body: {
        group: faker.random.word(),
        url: faker.internet.url(),
      },
    };
    spy.mockResolvedValue(null);
    const sut = new CreateLinkController(new CreateLinkService(getMongoRepository(Link)));
    const result = await sut.handle(payload);
    expect(result.statusCode).toBe(400);
  });
});
