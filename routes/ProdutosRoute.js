var express = require('express');
var produtosRouter = express.Router();

var produtosController = require('../controllers/produtosController');

produtosRouter.route('')
  .get(produtosController.get)
  .post(produtosController.add);

produtosRouter.route('/:id')    
  .get(produtosController.getById)
  .put(produtosController.update)
  .delete(produtosController.dele);

module.exports = produtosRouter; 