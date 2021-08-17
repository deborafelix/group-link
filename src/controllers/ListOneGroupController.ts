import IRequestPayload from '../interfaces/RequestPayloadInterface';
import ListOneGroupService from '../services/ListOneGroupService';
import { ok } from '../helpers/http-helper';

class ListOneGroupController {
  async handle(payload: IRequestPayload) {
    const listOneGroupService = new ListOneGroupService();
    const { group } = payload.params;
    const result = await listOneGroupService.execute(group);

    return ok(result);
  }
}

export default ListOneGroupController;
