import { Router } from 'express';
import adapt from './express-adapter';

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

route.get('', adapt(listAllLinksController));
route.post('', adapt(createLinkController));
route.put('', adapt(updateLinkController));

route.delete('/:id', adapt(removeLinkController));
route.get('/:group', adapt(listOneGroupController));

export default route;
