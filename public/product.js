(function() {
    
  
    var clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', function(event) {
      var inputs = document.getElementsByClassName('form-control');
      for(var i = 0; i < inputs.length; ++i) {
        var item = inputs[i];
        item.value = '';
      }
    });
});