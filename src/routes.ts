import { Application, Router } from 'express';
import { getMongoRepository } from 'typeorm';
import adapt from './express-adapter';
import Link from './entities/Link';

import CreateLinkController from './controllers/CreateLinkController';
import ListAllLinksController from './controllers/ListAllLinksController';
import ListOneGroupController from './controllers/ListOneGroupController';
import UpdateLinkController from './controllers/UpdateLinkController';
import RemoveLinkController from './controllers/RemoveLinkController';

import CreateLinkService from './services/CreateLinkService';
import ListAllLinksService from './services/ListAllLinksService';
import ListOneGroupService from './services/ListOneGroupService';
import UpdateLinkService from './services/UpdateLinkService';
import RemoveLinkService from './services/RemoveLinkService';

const configRoutes = async (app: Application) => {
  const route = Router();

  const linkRepository = getMongoRepository(Link);
  const createLinkService = new CreateLinkService(linkRepository);
  const listAllLinksService = new ListAllLinksService(linkRepository);
  const listOneGroupService = new ListOneGroupService(linkRepository);
  const updateLinkService = new UpdateLinkService(linkRepository);
  const removeLinkService = new RemoveLinkService(linkRepository);

  const createLinkController = new CreateLinkController(createLinkService);
  const listAllLinksController = new ListAllLinksController(listAllLinksService);
  const listOneGroupController = new ListOneGroupController(listOneGroupService);
  const updateLinkController = new UpdateLinkController(updateLinkService);
  const removeLinkController = new RemoveLinkController(removeLinkService);

  route.get('/grouplink', adapt(listAllLinksController));
  route.post('/grouplink', adapt(createLinkController));
  route.put('/grouplink', adapt(updateLinkController));

  route.delete('/grouplink/:id', adapt(removeLinkController));
  route.get('/grouplink/:group', adapt(listOneGroupController));
  app.use(route);
};

export default configRoutes;
