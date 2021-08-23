import { MongoMemoryServer } from 'mongodb-memory-server';
import { ConnectionOptions } from 'typeorm';

const setupDB = async (): Promise<ConnectionOptions> => {
  const mongoServer = await MongoMemoryServer.create();

  const uri = mongoServer.getUri();

  return {
    type: 'mongodb',
    url: uri,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: [
      'src/entities/**/*.ts',
    ],
  };
};

export default setupDB;
