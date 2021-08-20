import faker from 'faker';
import CreateLinkController from '../../src/controllers/CreateLinkController';
import CreateLinkService from '../../src/services/CreateLinkService';

describe('Create Link Controller', () => {
  const spy = jest.spyOn(CreateLinkService.prototype, 'execute');

  it('should create a link', async () => {
    const payload = {
      body: {
        group: faker.random.word(),
        url: faker.internet.url(),
      },
    };
    spy.mockResolvedValue({
      id: faker.datatype.uuid(),
      group: payload.body.group,
      url: payload.body.url,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    const sut = new CreateLinkController();
    const result = await sut.handle(payload);
    expect(result).toBeDefined();
  });

  it('should not create a link if already exists', async () => {
    const payload = {
      body: {
        group: faker.random.word(),
        url: faker.internet.url(),
      },
    };
    spy.mockResolvedValue(null);
    const sut = new CreateLinkController();
    const result = await sut.handle(payload);
    expect(result.statusCode).toBe(400);
  });
});
