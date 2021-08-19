import faker from 'faker';
import ListOneGroupController from '../../src/controllers/ListOneGroupController';
import ListOneGroupService from '../../src/services/ListOneGroupService';

describe('List One Group Controller', () => {
  const spy = jest.spyOn(ListOneGroupService.prototype, 'execute');

  it('should list all links for one group', async () => {
    const payload = {
      params: {
        group: faker.random.word(),
      },
    };
    spy.mockResolvedValue([{
      id: faker.datatype.uuid(),
      group: payload.params.group,
      url: faker.internet.url(),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: faker.datatype.uuid(),
      group: payload.params.group,
      url: faker.internet.url(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);

    const sut = new ListOneGroupController();
    const result = await sut.handle(payload);
    expect(result).toBeDefined();
    expect(result).toHaveProperty('body');
    expect(result.body.length).toBeGreaterThan(0);
  });
});
