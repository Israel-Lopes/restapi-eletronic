let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let productModel = new Schema({
  name : String,
  description : String,
  price : Number,
  stock : Number,
  active : { type: Boolean, default: true}
});

module.exports = mongoose.model("Product",productModel);
