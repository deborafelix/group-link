import IRequestPayload from '../interfaces/RequestPayloadInterface';
import RemoveLinkService from '../services/RemoveLinkService';
import { badRequest, noContent } from '../helpers/http-helper';

class RemoveLinkController {
  async handle(payload: IRequestPayload) {
    const removeLinkService = new RemoveLinkService();
    const { id } = payload.params;
    if (!id) {
      return badRequest(new Error('Missed ID'));
    }
    await removeLinkService.execute(id);

    return noContent();
  }
}

export default RemoveLinkController;
