import faker from 'faker';

export default function createLink() {
  return {
    title: faker.random.word(),
    icon: 'FaStar',
    url: faker.internet.url(),
    description: faker.random.words(5),
    group: faker.random.word(),
    fav: false,
  };
}
