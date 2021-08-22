import CreateLinkService from '../services/CreateLinkService';
import { badRequest, created } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';
import IRequestPayload from '../interfaces/RequestPayloadInterface';

class CreateLinkController implements IBaseController {
  createLinkService: CreateLinkService;

  constructor(createLinkService: CreateLinkService) {
    this.createLinkService = createLinkService;
  }

  async handle(payload: IRequestPayload) {
    console.log(payload);
    const { group, url } = payload.body;
    const newLink = await this.createLinkService.execute({ group, url });
    if (!newLink) {
      return badRequest(new Error('This group already exists'));
    }
    return created(newLink);
  }
}

export default CreateLinkController;
