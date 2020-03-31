var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var produtoModel = new Schema({
  nome : String,
  descricao : String,
  preco : Number,
  estoque : Number,
  ativo : { type: Boolean, default: false}
});

module.exports = mongoose.model("Produto",produtoModel);