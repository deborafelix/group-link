import faker from 'faker';
import { Connection, createConnection } from 'typeorm';
import CreateLinkService from '../../src/services/CreateLinkService';

describe('Create Link Service', () => {
  let connection: Connection;
  beforeAll(async () => {
    connection = await createConnection();
  });
  afterAll(async () => {
    await connection.close();
  });
  it('should create a link', async () => {
    const payload = {
      group: faker.random.word(),
      url: faker.internet.url(),
    };

    const sut = new CreateLinkService();
    const result = await sut.execute(payload);
    expect(result).toBeDefined();
  });
});
