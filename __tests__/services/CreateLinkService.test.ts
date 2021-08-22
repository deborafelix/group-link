import faker from 'faker';
import {
  Connection, createConnection, getMongoRepository, MongoRepository,
} from 'typeorm';
import Link from '../../src/entities/Link';
import CreateLinkService from '../../src/services/CreateLinkService';

describe('Create Link Service', () => {
  let connection: Connection;
  let link: Link;
  let linkRepository: MongoRepository<Link>;
  const createdBefore = {
    group: faker.random.word(),
    url: faker.internet.url(),
  };

  beforeAll(async () => {
    connection = await createConnection();
    linkRepository = getMongoRepository(Link);
    link = await (await linkRepository.insert(createdBefore)).raw;
  });

  afterAll(async () => {
    await linkRepository.delete(link);
    await connection.close();
  });

  it('should create a link', async () => {
    const payload = {
      group: faker.random.word(),
      url: faker.internet.url(),
    };
    const sut = new CreateLinkService(linkRepository);
    const result = await sut.execute(payload);
    expect(result).toBeDefined();
  });

  it('should not created because already exists', async () => {
    const sut = new CreateLinkService(linkRepository);
    const result = await sut.execute(createdBefore);
    expect(result).toBeNull();
  });
});
