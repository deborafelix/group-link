import faker from 'faker';
import {
  Connection, createConnection, getMongoRepository, MongoRepository,
} from 'typeorm';
import Link from '../../src/entities/Link';
import RemoveLinkService from '../../src/services/RemoveLinkService';
import setupDB from '../utils/db';

describe('Remove Link Service', () => {
  let connection: Connection;
  let link: Link;
  let linkRepository: MongoRepository<Link>;
  const createdBefore = {
    group: faker.random.word(),
    url: faker.internet.url(),
  };

  beforeAll(async () => {
    const connectionOpt = await setupDB();
    connection = await createConnection(connectionOpt);
    linkRepository = getMongoRepository(Link);
    link = await (await linkRepository.insert(createdBefore)).raw;
  });

  afterAll(async () => {
    await linkRepository.delete(link);
    await connection.close();
  });

  it('should remove link', async () => {
    const sut = new RemoveLinkService(linkRepository);
    const result = await sut.execute(link.id);
    expect(result).toBeUndefined();
  });
});
