import ListOneGroupService from '../services/ListOneGroupService';
import { ok } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';
import IRequestPayload from '../interfaces/RequestPayloadInterface';

class ListOneGroupController implements IBaseController {
  async handle(payload: IRequestPayload) {
    const listOneGroupService = new ListOneGroupService();
    const { group } = payload.params;
    const result = await listOneGroupService.execute(group);

    return ok(result);
  }
}

export default ListOneGroupController;
