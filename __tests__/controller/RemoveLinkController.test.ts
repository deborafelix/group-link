import faker from 'faker';
import RemoveLinkController from '../../src/controllers/RemoveLinkController';
import RemoveLinkService from '../../src/services/RemoveLinkService';

describe('Remove Link Controller', () => {
  const spy = jest.spyOn(RemoveLinkService.prototype, 'execute');

  it('should remove the link', async () => {
    const payload = {
      params: {
        id: faker.datatype.uuid(),
      },
    };
    spy.mockResolvedValue();

    const sut = new RemoveLinkController();
    const result = await sut.handle(payload);
    expect(result.statusCode).toBe(204);
  });

  it('should not remove the link because missing id', async () => {
    const payload = {
      params: {},
    };
    spy.mockResolvedValue();

    const sut = new RemoveLinkController();
    const result = await sut.handle(payload);
    expect(result.statusCode).toBe(400);
  });
});
