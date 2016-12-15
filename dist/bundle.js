angular.module("goApp", ['ui.router', 'ngAnimate'])
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/');

   $stateProvider
   .state('home', {
      templateUrl: '../views/home.html',
      controller: 'homeCtrl',
      url:'/'
   })
   .state('loggin', {
      templateUrl: '../views/loggin.html',
      controller: 'logginCtrl',
      url:'/loggin'
   })
   .state('cameras', {
      templateUrl: '../views/cameras.html',
      controller: 'camerasCtrl',
      url:'/cameras'
   })
   .state('drones', {
      templateUrl: '../views/drones.html',
      controller: 'dronesCtrl',
      url:'/drones'
   })
   .state('apparel', {
      templateUrl: '../views/apparel.html',
      controller: 'apparelCtrl',
      url:'/apparel'
   })
   .state('apparelProduct', {
      templateUrl: '../views/apparelProduct.html',
      controller: 'apparelProductCtrl',
      url:'/apparel/:id'
   })


}]);

angular.module("goApp").controller('apparelCtrl', ["$scope", function($scope) {
   $scope.test = "apparel CTRL works"
}]);

angular.module("goApp").controller('apparelProductCtrl', ["$scope", function($scope) {
   $scope.test = "apparel products CTRL works"
}]);

angular.module("goApp").controller('dronesCtrl', ["$scope", function($scope) {
   $scope.test = "drones CTRL works"
}]);

angular.module("goApp").controller('camerasCtrl', ["$scope", function($scope) {
   $scope.test = "Cameras CTRL works"
}]);

angular.module("goApp").controller('homeCtrl', ["$scope", function($scope) {
   $scope.test = "Home CTRL works"
}]);

angular.module("goApp").controller('logginCtrl', ["$scope", function($scope) {
   $scope.test = 'Loggin CTRL works';
}]);

angular.module('goApp').directive('banner', function() {

   return {
      restrict: 'E',
      templateUrl: './views/bannerDir.html',
      scope: {
         item: '='
      },
      controller: ["$scope", function($scope) {
         $scope.hoverShop = false;
         $scope.hoverWatch = false;
      }]
   };
})


angular.module("goApp").controller('mainCtrl', ["$scope", function($scope) {
   $scope.test = 'Main CTRL works';
}]);
