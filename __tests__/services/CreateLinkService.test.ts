import {
  Connection, createConnection, getMongoRepository, MongoRepository,
} from 'typeorm';
import Link from '../../src/entities/Link';
import CreateLinkService from '../../src/services/CreateLinkService';
import createLink from '../utils/createLink';
import setupDB from '../utils/db';

describe('Create Link Service', () => {
  let connection: Connection;
  let link: Link;
  let linkRepository: MongoRepository<Link>;
  const createdBefore = createLink();

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

  it('should create a link', async () => {
    const payload = createLink();
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
