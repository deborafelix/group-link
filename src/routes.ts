import { Router } from 'express';
import * as controller from './controllers/controller-link';
import { adapt } from './express-adapter';

const route = Router();

route.get('', adapt(controller.listAll));
route.post('', adapt(controller.create));
route.put('', adapt(controller.updateField));

route.delete('/:id', adapt(controller.remove));
route.get('/:group', adapt(controller.listOneGroup));

export default route;
