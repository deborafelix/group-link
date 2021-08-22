import faker from 'faker';
import {
  Connection, createConnection, getMongoRepository, MongoRepository,
} from 'typeorm';
import Link from '../../src/entities/Link';
import ListAllLinksService from '../../src/services/ListAllLinksService';

describe('List All Links Service', () => {
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

  it('should list all links', async () => {
    const sut = new ListAllLinksService(linkRepository);
    const result = await sut.execute();
    expect(result).toBeDefined();
  });
});
