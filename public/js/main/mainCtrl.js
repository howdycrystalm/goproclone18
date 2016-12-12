angular.module("goApp").controller('mainCtrl', function($scope, $state, $timeout, $rootScope, mainService) {

   $scope.stateName;
   $scope.cart = [];
   $scope.subTotal = 0;
   $scope.items = 0;
   $scope.shipping = 18;
   $scope.total = 18;

   $scope.zeroOut = function () {
      $scope.cart = [];
      $scope.subTotal = 0;
      $scope.items = 0;
      $scope.total = 0;
   }

   $scope.addToCart = function(id, prodid, amount, size) {
      console.log(amount);
      mainService.getItem(id, prodid, amount, size)
         .then(function(response) {
            $scope.cart=mainService.checkDouble($scope.cart, response);
            console.log($scope.cart);
            $scope.subTotal=mainService.getSubTotal($scope.cart);
            $scope.items=mainService.getNumOfItems($scope.cart);
            $scope.total = parseInt($scope.shipping) + parseInt($scope.subTotal);
      })
   }

   $scope.removeFromCart = function(id) {
      $scope.cart=mainService.removeItem($scope.cart, id);
      $scope.subTotal=mainService.getSubTotal($scope.cart);
      $scope.items=mainService.getNumOfItems($scope.cart);
      $scope.total = parseInt($scope.shipping) + parseInt($scope.subTotal);
   }

   $scope.updateTotal = function() {
      $scope.subTotal=mainService.getSubTotal($scope.cart);
      $scope.items = mainService.getNumOfItems($scope.cart);
      $scope.total = parseInt($scope.shipping) + parseInt($scope.subTotal);
   }

   $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
         $timeout(function() {
           $scope.stateName = $state.current.name;
        }, 100);
      })
});
