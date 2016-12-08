angular.module("goApp").controller('apparelCtrl', function($scope, mainService, products) {

    $scope.products = products;
    console.log(products);
    $scope.gender = 'Male';

    $scope.productFilter = function(product) {
        if (product.gender === $scope.gender || product.gender === 'NULL') {
            // console.log(product);
            return product;
        }

        return false;
    }

});
