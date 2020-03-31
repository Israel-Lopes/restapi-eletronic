var Product = require('../models/productModel');

module.exports = {
  get: (req,res) => {
    Product.find((err, products) => {
      if (err) {
        res.status(500);
        res.send("Internal server error");
      }
      else {
        res.status(200);
        res.send(products);
      }
    });
  },

  getById: (req, res) => {
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        res.status(404);
        res.send("Product not fould...");
      }
      else {
        res.status(200);
        res.send(product);
      }
    });
  },
  
  add: (req, res) => {
    let product = new Product(req.body);
    product.save((err) => {
      if (err) {
        res.status(500);
        res.send('Error : failed to delete product...');
      }
      else {
        res.status(201);
        res.send(req.body);
      }
     });
    },

  update: (req, res) => {
    Product.findById(req.params.id, (err, product) => {
      if (err) {
        res.status(404);
        res.send("Product not found...");
      }
      else {
        produto.name = req.body.name;
        produto.description = req.body.description;
        produto.price = req.body.price;
        produto.stock = req.body.stock;
        produto.active = req.body.active;

        product.save((err) => {
            if (!err) {
              res.status(200);
              res.send(product);
            }
            else {
              res.status(500);
              res.send('Failed to update product...');
            }
          });
      }
    });
  },
    dele: (req, res) => {
    Product.findById(req.params.id, (err, product) => {
      product.remove((err) => {
        if (!err) {
          res.status(204);
          res.send('Deleted product...');
        }
      });
    });
    }
};
