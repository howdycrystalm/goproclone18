angular.module("goApp").controller('mainCtrl', function($scope, $state, $timeout, $rootScope) {
   $scope.stateName;
   $scope.test = "this is a test"

   $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
         $timeout(function() {
           $scope.stateName = $state.current.name;
           console.log($scope.stateName);
        }, 100);
      })
});
