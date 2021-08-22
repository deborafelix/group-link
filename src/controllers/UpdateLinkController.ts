import { badRequest, noContent } from '../helpers/http-helper';
import UpdateLinkService from '../services/UpdateLinkService';

import IBaseController from '../interfaces/BaseControllerInterface';
import IRequestPayload from '../interfaces/RequestPayloadInterface';

class UpdateLinkController implements IBaseController {
  updateLinkService: UpdateLinkService;

  constructor(updateLinkService: UpdateLinkService) {
    this.updateLinkService = updateLinkService;
  }

  async handle(payload: IRequestPayload) {
    const { group, url, id } = payload.body;
    if (!id) {
      return badRequest(new Error('Missed ID'));
    }
    if (!group) {
      return badRequest(new Error('Missed Group'));
    }
    if (!url) {
      return badRequest(new Error('Missed URL'));
    }
    const fields = { group, url };
    await this.updateLinkService.execute(id, fields);
    return noContent();
  }
}

export default UpdateLinkController;
