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
    const {
      userId,
      title,
      icon,
      url,
      description
    } = payload.body;
    const newLink = await this.createLinkService.execute({
      userId,
      title,
      icon,
      url,
      description
    });
    if (!newLink) {
      return badRequest(new Error('This group already exists'));
    }
    return created(newLink);
  }
}

export default CreateLinkController;
