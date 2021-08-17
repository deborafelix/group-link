import ListAllLinksService from '../services/ListAllLinksService';
import { ok } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';

class ListAllLinksController implements IBaseController {
  async handle() {
    const listAllLinksService = new ListAllLinksService();
    const result = await listAllLinksService.execute();

    return ok(result);
  }
}

export default ListAllLinksController;
