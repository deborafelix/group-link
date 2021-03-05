const controller = require('../controllers/controller-link')
const {Router} = require('express')
const { adapt } = require('../adapters/express-adapter')

const route = Router();

route.get('', adapt(controller.listAll))
route.post('', adapt(controller.create))
route.put('', adapt(controller.updateField))

route.delete('/:id', adapt(controller.remove))
route.get('/:group', adapt(controller.listOneGroup))


module.exports = route