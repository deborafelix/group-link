import { badRequest, created } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';
import IRequestPayload from '../interfaces/RequestPayloadInterface';
import CreateUserService from '../services/CreateUserService';

class CreateUserController implements IBaseController {
  createUserService: CreateUserService;

  constructor(createUserService: CreateUserService) {
    this.createUserService = createUserService;
  }

  async handle(payload: IRequestPayload) {
    const {
      name,
      email,
      password
    } = payload.body;
    const newUser = await this.createUserService.execute({
      name, 
      email,
      password
    });
    if (!newUser) {
      return badRequest(new Error('This user already exists'));
    }
    return created(newUser);
  }
}

export default CreateUserController;
