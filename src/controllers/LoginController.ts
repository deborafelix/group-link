
import { badRequest, ok } from '../helpers/http-helper';

import IBaseController from '../interfaces/BaseControllerInterface';
import IRequestPayload from '../interfaces/RequestPayloadInterface';
import LoginService from '../services/LoginService';

class LoginController implements IBaseController {
  loginService: LoginService;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  async handle(payload: IRequestPayload) {
    const {
      email,
      password
    } = payload.body;
    const token = await this.loginService.execute({
      email,
      password
    });
    if (!token) {
      return badRequest(new Error('This user not exists'));
    }
    return ok({token})
  }
}

export default LoginController;
