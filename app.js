(function () {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Docdecahedron',
      price: 100.50,
      description: 'This is a cool gem',
      canPurchase: true
    },
    {
      name: 'Ruby',
      price: 200.50,
      description: 'This is a red gem',
      canPurchase: true
    }
  ];
})();