import RemoveLinkService from '../services/RemoveLinkService';
import { badRequest, noContent } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';
import IRequestPayload from '../interfaces/RequestPayloadInterface';

class RemoveLinkController implements IBaseController {
  removeLinkService: RemoveLinkService;

  constructor(removeLinkService: RemoveLinkService) {
    this.removeLinkService = removeLinkService;
  }

  async handle(payload: IRequestPayload) {
    const { id } = payload.params;
    const {userId} = payload.body;
    if (!id) {
      return badRequest(new Error('Missed ID'));
    }
    await this.removeLinkService.execute(id, userId);
    return noContent();
  }
}

export default RemoveLinkController;
