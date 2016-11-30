angular.module("goApp").controller('mainCtrl', function($scope, $state, $timeout, $rootScope) {
   $scope.stateName;
   $scope.dummiecart = [
      {
         img: 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw02a7026a/hero5launch/HERO5_Black_45.png?sw=128&sh=70&sm=fit',
         total: 1,
         name: 'HERO5 Black',
         price: 399.99
      },
      {
         img: 'http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw4e2dbfde/hero5launch/HERO5_Session_315.png?sw=128&sh=70&sm=fit',
         total: 2,
         name: 'HERO5 Session',
         price: 299.99
      },
      {
         img: 'http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw15b9f66e/hi-res/CHDHS-102_main1.jpg?sw=128&sh=70&sm=fit',
         total: 1,
         name: 'HERO Session',
         price: 199.99
      }
   ];

   $state.cart = [];
   $state.subTotal = 0;
   $state.numberOfItems = 0;

   $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
         $timeout(function() {
           $scope.stateName = $state.current.name;
        }, 100);
      })
});
