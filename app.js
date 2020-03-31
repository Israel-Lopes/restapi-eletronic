var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var produtosRouter = require('./routes/ProdutosRoute');

var app = express();

var db = mongoose.connection;

const password = require('./password');
const url = password;

db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado ao banco de dados produtosdb MongoDB.')
});

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(5000, function () {
  console.log('Servidor escutando na porta 5000');
});

app.use(bodyParser.json());

app.use('/produtos', produtosRouter); 
