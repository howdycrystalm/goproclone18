angular.module('goApp').directive('banner', function() {

   return {
      restrict: 'E',
      templateUrl: './views/bannerDir.html',
      scope: {
         item: '='
      }
   };
})
