angular.module("goApp").controller('mainCtrl', function($scope, $state, $timeout, $rootScope, mainService) {
   $scope.dummiecart = [
      {
         img: 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw02a7026a/hero5launch/HERO5_Black_45.png?sw=128&sh=70&sm=fit',
         count: 1,
         title: 'HERO5 Black',
         price: 399.99,
         id: 1
      },
      {
         img: 'http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw4e2dbfde/hero5launch/HERO5_Session_315.png?sw=128&sh=70&sm=fit',
         count: 2,
         title: 'HERO5 Session',
         price: 299.99
      },
      {
         img: 'http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw15b9f66e/hi-res/CHDHS-102_main1.jpg?sw=128&sh=70&sm=fit',
         count: 1,
         title: 'HERO Session',
         price: 199.99
      }
   ];

   $scope.stateName;
   $state.cart = [];
   $state.subTotal = 0;
   $state.numberOfItems = 0;

   $state.addToCart = function(id) {
      mainService.getItem(id)
         .then(function(response) {
            $state.cart=mainService.checkDouble($state.cart, response.data)
         .then(function() {$state.subTotal=mainService.getSubTotal($state.cart)
         .then(function() {$state.numberOfItems=mainService.getNumOfItems($state.cart)})
      })
      })
   };

   $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
         $timeout(function() {
           $scope.stateName = $state.current.name;
        }, 100);
      })
});
