import ListAllLinksService from '../services/ListAllLinksService';
import { ok } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';

class ListAllLinksController implements IBaseController {
  listAllLinksService: ListAllLinksService;

  constructor(listAllLinksService: ListAllLinksService) {
    this.listAllLinksService = listAllLinksService;
  }

  async handle() {
    const result = await this.listAllLinksService.execute();
    return ok(result);
  }
}

export default ListAllLinksController;
