let mongoose = require('mongoose');
let express = require('express');
let bodyParser = require('body-parser');

let produtosRouter = require('./routes/ProductsRoute');

let app = express();

let db = mongoose.connection;

const password = require('./password');
const url = password;

db.on('error', console.error);
db.once('open', () => {
  console.log('Connected to the productsdb MongoDB database.');
});

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});

app.use(bodyParser.json());

app.use('/products', produtosRouter);
