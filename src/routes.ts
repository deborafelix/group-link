import { Application, Router } from 'express';
import { getMongoRepository } from 'typeorm';
import adapt from './express-adapter';
import Link from './entities/Link';
import User from './entities/User';

import CreateLinkController from './controllers/CreateLinkController';
import ListAllLinksController from './controllers/ListAllLinksController';
import UpdateLinkController from './controllers/UpdateLinkController';
import RemoveLinkController from './controllers/RemoveLinkController';
import CreateUserController from './controllers/CreateUserController';
import LoginController from './controllers/LoginController';

import CreateLinkService from './services/CreateLinkService';
import ListAllLinksService from './services/ListAllLinksService';
import UpdateLinkService from './services/UpdateLinkService';
import RemoveLinkService from './services/RemoveLinkService';
import CreateUserService from './services/CreateUserService';
import LoginService from './services/LoginService';
import authMiddlware from './middleware/Auth';

const configRoutes = async (app: Application) => {
  const route = Router();

  const linkRepository = getMongoRepository(Link);
  const userRepository = getMongoRepository(User);

  const createLinkService = new CreateLinkService(linkRepository);
  const listAllLinksService = new ListAllLinksService(linkRepository);
  const updateLinkService = new UpdateLinkService(linkRepository);
  const removeLinkService = new RemoveLinkService(linkRepository);
  const createUserService = new CreateUserService(userRepository);
  const loginService = new LoginService(userRepository);

  const createLinkController = new CreateLinkController(createLinkService);
  const listAllLinksController = new ListAllLinksController(listAllLinksService);
  const updateLinkController = new UpdateLinkController(updateLinkService);
  const removeLinkController = new RemoveLinkController(removeLinkService);
  const createUserController = new CreateUserController(createUserService);
  const loginController = new LoginController(loginService);

  route.post('/grouplink/login', adapt(loginController));
  route.post('/grouplink/user', adapt(createUserController));

  route.get('/grouplink', authMiddlware, adapt(listAllLinksController));
  route.post('/grouplink', authMiddlware, adapt(createLinkController));
  route.put('/grouplink', authMiddlware, adapt(updateLinkController));

  route.delete('/grouplink/:id', authMiddlware, adapt(removeLinkController));
  app.use(route);
};

export default configRoutes;
