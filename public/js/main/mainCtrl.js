angular.module("goApp").controller('mainCtrl', function($scope, $state, $timeout, $rootScope, mainService) {
   $scope.dummiecart = [
      // {
      //    img: 'https://sits-pod15.demandware.net/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw02a7026a/hero5launch/HERO5_Black_45.png?sw=128&sh=70&sm=fit',
      //    count: 1,
      //    title: 'HERO5 Black',
      //    price: 399.99,
      //    id: 1
      // },
      // {
      //    img: 'http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw4e2dbfde/hero5launch/HERO5_Session_315.png?sw=128&sh=70&sm=fit',
      //    count: 2,
      //    title: 'HERO5 Session',
      //    price: 299.99
      // },
      // {
      //    img: 'http://demandware.edgesuite.net/sits_pod15/dw/image/v2/AASJ_PRD/on/demandware.static/-/Sites-gopro-products/default/dw15b9f66e/hi-res/CHDHS-102_main1.jpg?sw=128&sh=70&sm=fit',
      //    count: 1,
      //    title: 'HERO Session',
      //    price: 199.99
      // }
   ];

   $scope.stateName;
   $scope.cart = [];
   $scope.subTotal = 0;
   $scope.items = 0;

   $scope.addToCart = function(id) {
      mainService.getItem(id)
         .then(function(response) {
            console.log(response[0]);
            $scope.cart=mainService.checkDouble($scope.cart, response[0]);
            $scope.subTotal=mainService.getSubTotal($scope.cart);
            $scope.items=mainService.getNumOfItems($scope.cart);
            console.log($scope.cart);
            console.log($scope.subTotal);
            console.log($scope.items);
      })
   }

   $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
         $timeout(function() {
           $scope.stateName = $state.current.name;
        }, 100);
      })
});
