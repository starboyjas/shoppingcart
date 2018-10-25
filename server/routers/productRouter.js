
const express = require('express');
const router = express.Router(); 
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./data.json', { product: [] });

router.get('/', (req, res, next) => {
  console.log('Index page only');
  next();
}, (req, res) => {
  res.json(store.get('product'));
});

router.get('/:id', (req, res) => {
  let product = {};
  const products = store.get('product');
  products = product.find(product => product.id === req.params.id);
  res.json(product);
});

router.post('/', (req, res) => {
  const product = store.get('product');
  const newProduct = {
    id: product.length > 0 ? product[product.length - 1].id + 1 : 1,
    productName: req.body.productName,
    price: req.body.price,
    itemsLeft: req.body.itemsLeft
  };

  product.push(newProduct);
  store.set('product', product);

  res.json(product);
});

module.exports = router;