import faker from 'faker';
import Link from '../../src/entities/Link';

export default function createLink(): Link {
  return {
    title: faker.random.word(),
    icon: 'FaStar',
    url: faker.internet.url(),
    description: faker.random.words(5),
    userId: 'user_id_test',
    id: 'test',
    createdAt: new Date(),
    updatedAt: new Date()
  };
}
