/**
 * indexRouter
 */
const express = require('express');
const router = express.Router(); 
const SimpleJsonStore = require('simple-json-store');

const store = new SimpleJsonStore('./data.json', { product: [] });

router.get('/', function getIndexPage(req, res) {
    let viewModel = req.viewModel;
    viewModel.product = store.get('product');
    res.render('index.html', viewModel);
});


router.post('/', function submitproduct(req, res) {
    let product = store.get('product');
    product.push({
      productName: req.body.productName,
      price: req.body.price,
      itemsLeft: req.body.itemsLeft
    });
    store.set('product', product);
    res.redirect('/');
});

  module.exports = router;