import CreateLinkService from '../services/CreateLinkService';
import { badRequest, created } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';
import IRequestPayload from '../interfaces/RequestPayloadInterface';

class CreateLinkController implements IBaseController {
  async handle(payload: IRequestPayload) {
    const createLinkService = new CreateLinkService();
    const { group, url } = payload.body;
    const newLink = await createLinkService.execute({ group, url });
    if (!newLink) {
      return badRequest(new Error('This group already exists'));
    }
    return created(newLink);
  }
}

export default CreateLinkController;
