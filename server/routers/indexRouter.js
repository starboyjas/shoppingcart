/**
 * indexRouter
 */
const express = require('express');
const router = express.Router(); 
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./data.json', { products: [] });

router.get('/', function getIndexPage(req, res) {
    let viewModel = req.viewModel;
    viewModel.products = store.get('products');
    res.render('index.html', viewModel);
});


router.post('/', function submitProducts(req, res) {
    let products = store.get('products');
    products.push({
      productName: req.body.productName,
      price: req.body.price,
      itemsLeft: req.body.itemsLeft
    });
    store.set('products', products);
    res.redirect('/');
});

  module.exports = router;