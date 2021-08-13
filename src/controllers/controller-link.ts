import { IRequestPayload } from '../express-adapter';
import * as service from '../services/link-service';

export async function create(payload: IRequestPayload) {
  const { group, url } = payload.body as service.ICreateLinkFields;
  const newLink = await service.create({ group, url });

  return {
    statusCode: 201,
    data: newLink,
  };
}

export async function listAll() {
  const result = await service.readAll();
  return {
    statusCode: 200,
    data: result,
  };
}

export async function listOneGroup(payload: IRequestPayload) {
  const { group } = payload.params;
  const result = await service.readOneGroup(group);

  return {
    statusCode: 200,
    data: result,
  };
}

export async function updateField(payload: IRequestPayload) {
  const { group, url, id } = payload.body;
  if (!id) {
    return { statusCode: 400, data: { message: 'Missed ID' } };
  }
  if (!group && !url) {
    return { statusCode: 400, data: { message: 'Bad Request' } };
  }
  const fields = { group, url };
  await service.update(id, fields);
  return { statusCode: 204, data: { message: 'Updated' } };
}

export async function remove(payload: IRequestPayload) {
  const { id } = payload.params;
  if (!id) {
    return { statusCode: 400, data: { message: 'Missed ID' } };
  }
  await service.remove(id);

  return { statusCode: 204, data: { message: 'Link is deleted' } };
}
