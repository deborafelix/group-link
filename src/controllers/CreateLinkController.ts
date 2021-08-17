import IRequestPayload from '../interfaces/RequestPayloadInterface';
import CreateLinkService from '../services/CreateLinkService';
import { created } from '../helpers/http-helper';

class CreateLinkController {
  async handle(payload: IRequestPayload) {
    const createLinkService = new CreateLinkService();
    const { group, url } = payload.body;
    const newLink = await createLinkService.execute({ group, url });

    return created(newLink);
  }
}

export default CreateLinkController;
