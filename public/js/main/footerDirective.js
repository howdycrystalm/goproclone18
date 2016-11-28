angular.module('goApp').directive('footer', function() {

   return {
      restrict: 'E',
      templateUrl: './views/footerDir.html',
      scope: {
         item: '='
      },
      controller: function($scope) {
      }
   };
})
