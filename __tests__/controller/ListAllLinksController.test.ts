import faker from 'faker';
import ListAllLinksController from '../../src/controllers/ListAllLinksController';
import ListAllLinksService from '../../src/services/ListAllLinksService';

describe('List All Links Controller', () => {
  const spy = jest.spyOn(ListAllLinksService.prototype, 'execute');

  it('should list all links', async () => {
    spy.mockResolvedValue([{
      id: faker.datatype.uuid(),
      group: faker.random.word(),
      url: faker.internet.url(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: faker.datatype.uuid(),
      group: faker.random.word(),
      url: faker.internet.url(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

    const sut = new ListAllLinksController();
    const result = await sut.handle();
    expect(result).toBeDefined();
    expect(result).toHaveProperty('body');
    expect(result.body.length).toBeGreaterThan(0);
  });
});
