import ListOneGroupService from '../services/ListOneGroupService';
import { ok } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';
import IRequestPayload from '../interfaces/RequestPayloadInterface';

class ListOneGroupController implements IBaseController {
  listOneGroupService: ListOneGroupService;

  constructor(listOneGroupService: ListOneGroupService) {
    this.listOneGroupService = listOneGroupService;
  }

  async handle(payload: IRequestPayload) {
    const { group } = payload.params;
    const result = await this.listOneGroupService.execute(group);

    return ok(result);
  }
}

export default ListOneGroupController;
