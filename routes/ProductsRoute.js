let express = require('express');
let produtosRouter = express.Router();

let produtosController = require('../controllers/productsController');

produtosRouter.route('')
  .get(produtosController.get)
  .post(produtosController.add);

produtosRouter.route('/:id')
  .get(produtosController.getById)
  .put(produtosController.update)
  .delete(produtosController.dele);

module.exports = produtosRouter; 
