angular.module("goApp").controller('apparelCtrl', function($scope, mainService) {
   $scope.getItems = function() {
     mainService.getItems().then(function(response) {
       $scope.products = response;
       console.log(response);
     });
   }

   $scope.getItems();

   $scope.gender = "male";
   $scope.view = "view1";
});
