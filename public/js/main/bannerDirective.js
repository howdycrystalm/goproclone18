angular.module('goApp').directive('banner', function() {

   return {
      restrict: 'E',
      templateUrl: './views/bannerDir.html',
      scope: {
         state: '=',
         products: '=',
         subTot: '=',
         inCart: '='
      },
      controller: function($scope) {
         $scope.hoverShop = false;
         $scope.hoverWatch = false;
         $scope.cartShow = false;
      }
   };
})
