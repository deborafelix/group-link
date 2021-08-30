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
      title,
      icon,
      url,
      description,
      group,
      fav,
    } = payload.body;
    const newLink = await this.createLinkService.execute({
      title,
      icon,
      url,
      description,
      group,
      fav,
    });
    if (!newLink) {
      return badRequest(new Error('This group already exists'));
    }
    return created(newLink);
  }
}

export default CreateLinkController;
