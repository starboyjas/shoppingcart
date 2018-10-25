/**
 * productsRouter.js
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./data.json', { products: [] });

router.get('/', (req, res, next) => {
  console.log('Index page only');
  next();
}, (req, res) => {
  res.json(store.get('products'));
});

router.get('/:id', (req, res) => {
  let product = {};
  const pr = store.get('products');
  note = products.find(products => products.id === req.params.id);
  res.json(product);
});

router.post('/', (req, res) => {
  const products = store.get('products');
  const newNote = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    title: req.body.title,
    description: req.body.description
  };

  products.push(newNote);
  store.set('products', products);

  res.json(products);
});

module.exports = router;