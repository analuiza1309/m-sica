const express = require('express');
const route = express.Router();
const controller = require('../controller/musicacontroller');

route.get('/',controller.getAll);
route.get('/:id',controller.getByID);
route.post('/',controller.Postmusica);
route.delete('/:id',controller.deleteMusicas);
route.put('/:id',controller.putmusicas);
route.patch('/:id',controller.patchmusicas);


module.exports=route


