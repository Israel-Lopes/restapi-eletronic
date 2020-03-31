var Produto = require('../models/produtoModel');

module.exports = {
  get : function (req,res) {
    Produto.find(function (err, produtos) {
      if (err) {
        res.status(500);
        res.send("Erro interno do servidor");
      }
      else {
        res.status(200);
        res.send(produtos);
      }
    });
  },
  
  getById : function (req, res) {
    Produto.findById(req.params.id, function (err, produto) {
      if (err) {
        res.status(404);
        res.send("Produto não encontrado...");
      }
      else {
        res.status(200);
        res.send(produto);
      }
    });
  },
  
  add : function (req, res) {
    var produto = new Produto(req.body);
    produto.save(function (err) {
      if (err) {
        res.status(500);
        res.send('Erro : falha ao incluir produto...');
      }
      else {
        res.status(201);
        console.log(req.body)
        res.send(req.body);
      }
     });
    },
  
    update : function (req, res) {
      Produto.findById(req.params.id, function (err, produto) {
        if (err) {
          res.status(404);
          res.send("Produto não encontrado...");
        }
        else {
          produto.nome = req.body.nome;
          produto.descricao = req.body.descricao;
          produto.preco = req.body.preco;
          produto.estoque = req.body.estoque;
          produto.ativo = req.body.ativo;
          produto.save(function (err) {
              if (!err) {
                res.status(200);
                res.send(produto);
              }
              else {
                res.status(500);
                res.send('Falha ao atualizar produto...');
              }
            });
        }
      });
  },
    dele : function (req, res) {
    Produto.findById(req.params.id, function (err, produto) {
      produto.remove(function (err) {
        if (!err) {
          res.status(204);
          res.send('Produto deletado...');
        }
      });
    });
    }
};

