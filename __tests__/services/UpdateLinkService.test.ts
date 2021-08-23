import faker from 'faker';
import {
  Connection, createConnection, getMongoRepository, MongoRepository,
} from 'typeorm';
import Link from '../../src/entities/Link';
import UpdateLinkService from '../../src/services/UpdateLinkService';
import setupDB from '../utils/db';

describe('Update Link Service', () => {
  let connection: Connection;
  let link: Link;
  let linkRepository: MongoRepository<Link>;
  let createdBefore = {
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

  it('should update group link', async () => {
    createdBefore = {
      group: faker.random.word(),
      url: faker.internet.url(),
    };
    const sut = new UpdateLinkService(linkRepository);
    const result = await sut.execute(link.id, { group: createdBefore.group });
    expect(result).toBeUndefined();
  });
});
