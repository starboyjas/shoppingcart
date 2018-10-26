(function() {
    var shopVue = new Vue({
      el: '#shopVue',
      data: {
        productName: null,
        price: null,
        itemsLeft: null,
        products: []
      },
      created: function() {
        var self = this;
        axios.get('http://localhost:3300/product')
          .then(function(res) {
            self.products = res.data;
          })
          .catch(function(err) {
            self.products = [];
          });
      },
      methods: {
        addProduct: function() {
          var self = this;
          var payload = {
            productName: self.productName,
            price: self.price,
            itemsLeft: self.itemsLeft
          };
          axios.post('/product', payload)
            .then(function(res) {
              self.products = res.data;
              self.clear();
            })
            .catch(function(err) {
            });
        },
        clear: function() {
          this.productName = null;
          this.price = null;
          this.itemsLeft = null;
        },
        deleteProduct: function(product) {
          var self = this;
          axios.delete('/product/' + product.id)
            .then(function(res) {
              var index = -1;
              for(var i = 0; i < self.product.length; ++i) {
                if(Number(self.product[i].id) === Number(product.id)) {
                  index = i;
                  break;
                }
              }
              self.product.splice(index, 1);
            })
            .catch(function(err) {
            });
            
        }
      }
    });
        console.log(shopVue);
  })();

    