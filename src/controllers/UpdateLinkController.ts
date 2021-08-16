import { IRequestPayload } from '../express-adapter';
import UpdateLinkService from '../services/UpdateLinkService';

class UpdateLinkController {
  async handle(payload: IRequestPayload) {
    const updateLinkService = new UpdateLinkService();
    const { group, url, id } = payload.body;
    if (!id) {
      return { statusCode: 400, data: { message: 'Missed ID' } };
    }
    if (!group && !url) {
      return { statusCode: 400, data: { message: 'Bad Request' } };
    }
    const fields = { group, url };
    await updateLinkService.execute(id, fields);
    return { statusCode: 204, data: { message: 'Updated' } };
  }
}

export default UpdateLinkController;
