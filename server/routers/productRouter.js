
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
  const products = store.get('products');
  product = products.find(p => p.id === req.params.id);
  res.json(products);
});

/** router.post('', (req, res) => {

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
});*/  
    router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const products = store.get('product');
    const newProduct = products.filter(product => Number(product.id) !== Number(id));
  
    store.set('product', newProduct);
    res.json(newProduct);
  });

module.exports = router;