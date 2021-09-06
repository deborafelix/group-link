import ListAllLinksService from '../services/ListAllLinksService';
import { ok } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';
import IRequestPayload from '../interfaces/RequestPayloadInterface';

class ListAllLinksController implements IBaseController {
  listAllLinksService: ListAllLinksService;

  constructor(listAllLinksService: ListAllLinksService) {
    this.listAllLinksService = listAllLinksService;
  }

  async handle(payload: IRequestPayload) {
    const {userId} = payload.body;
    const result = await this.listAllLinksService.execute(userId);
    return ok(result);
  }
}

export default ListAllLinksController;
