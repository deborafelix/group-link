import { IRequestPayload } from '../express-adapter';
import RemoveLinkService from '../services/RemoveLinkService';

class RemoveLinkController {
  async handle(payload: IRequestPayload) {
    const removeLinkService = new RemoveLinkService();
    const { id } = payload.params;
    if (!id) {
      return { statusCode: 400, data: { message: 'Missed ID' } };
    }
    await removeLinkService.execute(id);

    return { statusCode: 204, data: { message: 'Link is deleted' } };
  }
}

export default RemoveLinkController;
