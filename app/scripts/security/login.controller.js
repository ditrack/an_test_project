'use strict';

/**
 * @ngdoc function
 * @name anTestProjectApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the anTestProjectApp
 */
angular
  .module('anTestProjectApp')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$rootScope', 'AUTH_EVENTS', 'authService'];

function LoginController($scope, $rootScope, AUTH_EVENTS, authService) {

  $scope.credentials = {
    username: '',
    password: ''
  };

  $scope.login = function (credentials) {
    authService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      $scope.setCurrentUser(user);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  };

  $scope.logout = function () {
    authService.logout();
  };
//fgdfg

  /*function createUnknownError(status) {
   return {
   status: status,
   statusText: 'Internal Server Error',
   description: 'No details available'
   };
   }

   $scope.awesomeThings = [];
   $scope.loading = true;

   // Get awesome things list
   $http({method: 'GET', url: '/api/features'}).

   success(function (data) {
   $scope.loading = false;
   $scope.awesomeThings = data;

   // Get description of each thing
   $scope.awesomeThings.forEach(function (thing) {
   thing.loading = true;

   $http({method: 'GET', url: thing.href}).
   success(function (data) {
   thing.loading = false;
   thing.description = data.description;
   }).
   error(function (data, status) {
   thing.loading = false;
   thing.error = data && data.description ? data : createUnknownError(status);
   });
   });
   }).

   error(function (data, status) {
   $scope.loading = false;
   $scope.error = data && data.description ? data : createUnknownError(status);
   });*/
}