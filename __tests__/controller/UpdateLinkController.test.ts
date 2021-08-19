import faker from 'faker';
import UpdateLinkController from '../../src/controllers/UpdateLinkController';
import UpdateLinkService from '../../src/services/UpdateLinkService';

describe('Update Link Controller', () => {
  const spy = jest.spyOn(UpdateLinkService.prototype, 'execute');

  it('should update the group of the link', async () => {
    const payload = {
      body: {
        id: faker.datatype.uuid(),
        group: faker.random.word(),
        url: faker.internet.url(),
      },
    };
    spy.mockResolvedValue();

    const sut = new UpdateLinkController();
    const result = await sut.handle(payload);
    expect(result).toBeDefined();
    expect(result.statusCode).toBe(204);
  });

  it('should not update because missing id', async () => {
    const payload = {
      body: {
        group: faker.random.word(),
        url: faker.internet.url(),
      },
    };
    spy.mockResolvedValue();

    const sut = new UpdateLinkController();
    const result = await sut.handle(payload);
    expect(result).toBeDefined();
    expect(result.statusCode).toBe(400);
  });

  it('should not update because missing group', async () => {
    const payload = {
      body: {
        id: faker.datatype.uuid(),
        url: faker.internet.url(),
      },
    };
    spy.mockResolvedValue();

    const sut = new UpdateLinkController();
    const result = await sut.handle(payload);
    expect(result).toBeDefined();
    expect(result.statusCode).toBe(400);
  });

  it('should not update because missing url', async () => {
    const payload = {
      body: {
        id: faker.datatype.uuid(),
        group: faker.random.word(),
      },
    };
    spy.mockResolvedValue();

    const sut = new UpdateLinkController();
    const result = await sut.handle(payload);
    expect(result).toBeDefined();
    expect(result.statusCode).toBe(400);
  });
});
