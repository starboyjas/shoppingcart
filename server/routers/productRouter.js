
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
  product = products.find(p => p.id === req.params.id);
  res.json(product);
});

router.post('', (req, res) => {

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
/** router.put('/:id', (req, res) => {
  const id = req.params.id;
  const notes = store.get('notes');

  let note = {};
  
  for (let i = 0; i < notes.length; i++) {
      if (notes[i].id == id) {
          notes[i].title = req.body.title;
          notes[i].description = req.body.description;
          note = notes[i];
          break;
      }
  }
  
  store.set('notes', notes);

  res.json(note);
});*/

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const products = store.get('product');
  const newProducts = products.filter(p => Number(p.id) !== Number(id));

  store.set('product', newProducts);
  res.json(newProducts);
});

module.exports = router;