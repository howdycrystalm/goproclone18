angular.module("goApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

   $urlRouterProvider.otherwise('/');

   $stateProvider
   .state('home', {
      templateUrl: '../views/home.html',
      controller: 'homeCtrl',
      url:'/'
   })

});
