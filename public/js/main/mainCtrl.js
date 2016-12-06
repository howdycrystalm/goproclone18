angular.module("goApp").controller('mainCtrl', function($scope, $state, $timeout, $rootScope, mainService) {

   $scope.stateName;
   $scope.cart = [];
   $scope.subTotal = 0;
   $scope.items = 0;
   $scope.shipping = 18;

   $scope.addToCart = function(id, size) {
      mainService.getItem(id, size)
         .then(function(response) {
            $scope.cart=mainService.checkDouble($scope.cart, response);
            $scope.subTotal=mainService.getSubTotal($scope.cart);
            $scope.items=mainService.getNumOfItems($scope.cart);
      })
   }

   $scope.removeFromCart = function(id) {
      $scope.cart=mainService.removeItem($scope.cart, id);
      $scope.subTotal=mainService.getSubTotal($scope.cart);
      $scope.items=mainService.getNumOfItems($scope.cart);
   }

   $scope.updateTotal = function() {
      $scope.subTotal=mainService.getSubTotal($scope.cart);
      $scope.items=mainService.getNumOfItems($scope.cart);
   }

   $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
         $timeout(function() {
           $scope.stateName = $state.current.name;
        }, 100);
      })
});
