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
    res.render('index.pug', viewModel);
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
    res.redirect('/')
  });
  


  module.exports = router;