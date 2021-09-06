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
    const { title, url, icon, description, id, userId } = payload.body;
    if (!id) {
      return badRequest(new Error('Missed ID'));
    }
    if (!url) {
      return badRequest(new Error('Missed URL'));
    }
    const fields = { title, url, icon, description, userId };
    await this.updateLinkService.execute(id, fields);
    return noContent();
  }
}

export default UpdateLinkController;
