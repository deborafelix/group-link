import faker from 'faker';
import {
  Connection, createConnection, getMongoRepository, MongoRepository,
} from 'typeorm';
import Link from '../../src/entities/Link';
import ListOneGroupService from '../../src/services/ListOneGroupService';
import setupDB from '../utils/db';

describe('List One Group Service', () => {
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

  it('should list one of group links', async () => {
    const sut = new ListOneGroupService(linkRepository);
    const result = await sut.execute(createdBefore.group);
    expect(result).toBeDefined();
  });
});
