import CreateLinkService from '../services/CreateLinkService';
import { created } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';
import IRequestPayload from '../interfaces/RequestPayloadInterface';

class CreateLinkController implements IBaseController {
  async handle(payload: IRequestPayload) {
    const createLinkService = new CreateLinkService();
    const { group, url } = payload.body;
    const newLink = await createLinkService.execute({ group, url });

    return created(newLink);
  }
}

export default CreateLinkController;
