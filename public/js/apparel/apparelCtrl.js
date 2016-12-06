angular.module("goApp").controller('apparelCtrl', function($scope, mainService, products) {

   $scope.products = products;
   $scope.gender = 'male';
   $scope.state = 1;
   $scope.productFilter = function(product) {
     if((product.gender === $scope.gender || product.gender === null) && product.state === $scope.state) {
       console.log($scope.gender);
       console.log(product);
       return product;
     }


     return false;
     }
});
