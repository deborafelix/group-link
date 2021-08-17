import { badRequest, noContent } from '../helpers/http-helper';
import IRequestPayload from '../interfaces/RequestPayloadInterface';
import UpdateLinkService from '../services/UpdateLinkService';

class UpdateLinkController {
  async handle(payload: IRequestPayload) {
    const updateLinkService = new UpdateLinkService();
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
    await updateLinkService.execute(id, fields);
    return noContent();
  }
}

export default UpdateLinkController;
