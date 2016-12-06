angular.module("goApp").service('mainService', function($http) {


   this.getItem = function(id) {
      return $http({
         method: 'GET',
         url: '/api/getItem/' + id
      }).then(function(response) {
         response.data[0].count = 1;
         return response.data[0];
      });
   };

   this.checkDouble = function(cart, data) {
      for (var i = 0; i < cart.length; i++) {
         if(cart[i].id === data.id) {
            cart[i].count++;
            return cart;
         }
      }
      cart.push(data);
      return cart;
   };

   this.getSubTotal = function(cart) {
      var total = 0;
      for (var i = 0; i < cart.length; i++) {
         total += parseFloat(cart[i].count) * parseFloat(cart[i].price);
      }
      return total;
   };

   this.getNumOfItems = function(cart) {
      var total = 0;
      for (var i = 0; i < cart.length; i++) {
         total += parseInt(cart[i].count);
      }
      return total;
   };

   this.removeItem = function(cart, id) {
      for (var i = 0; i < cart.length; i++) {
         if (cart[i].id === id) {
            cart.splice(i, 1);
            return cart;
         }
      }
   };

   this.getItems = function() {
     return $http ({
       method: 'GET',
        url: '/api/getItems'
      }).then(function(response) {
        return response.data
      });
   };
});
