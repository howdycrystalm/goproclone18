angular.module("goApp").controller('apparelCtrl', function($scope, mainService, products) {
    $scope.products = products;
    console.log(products);
    $scope.gender = 'Male';

    $scope.productFilter = function(product) {
        if (product[0].gender === $scope.gender || product[0].gender === 'NULL') {
            // console.log(product);
            return product;
        }

        return false;
    }

    $scope.sortProducts = function(products) {
        var bucket = {};
        for (var i = 0; i < products.length; i++) {
            var tempName = products[i].id + products[i].gender;
            if (bucket[tempName]) {
                bucket[tempName].push(products[i])
            } else {
                bucket[tempName] = [products[i]]
            }
        }
        var tempArr = [];
        for (var key in bucket) {
            tempArr.push(bucket[key]);
        }

        $scope.products = tempArr;
    }

    $scope.sortProducts($scope.products);


});
