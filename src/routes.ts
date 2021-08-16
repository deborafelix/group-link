import { Router } from 'express';
import { adapt } from './express-adapter';

// Controllers Imports
import CreateLinkController from './controllers/CreateLinkController';
import ListAllLinksController from './controllers/ListAllLinksController';
import ListOneGroupController from './controllers/ListOneGroupController';
import UpdateLinkController from './controllers/UpdateLinkController';
import RemoveLinkController from './controllers/RemoveLinkController';

const route = Router();

const createLinkController = new CreateLinkController();
const listAllLinksController = new ListAllLinksController();
const listOneGroupController = new ListOneGroupController();
const updateLinkController = new UpdateLinkController();
const removeLinkController = new RemoveLinkController();

route.get('', adapt(listAllLinksController.handle));
route.post('', adapt(createLinkController.handle));
route.put('', adapt(updateLinkController.handle));

route.delete('/:id', adapt(removeLinkController.handle));
route.get('/:group', adapt(listOneGroupController.handle));

export default route;
