'use strict';

/**
 * @ngdoc overview
 * @name yoAngularSeedApp
 * @description
 * # yoAngularSeedApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngularSeedApp', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'yoAngularSeedApp.view1',
    'yoAngularSeedApp.view2'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }])

  .controller('HeaderController', ['$scope', '$location', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
      var active = (viewLocation.indexOf($location.path()) === 0);
      return active;
    };
  }]);

angular.element(document).ready(function() {
  angular.bootstrap(document, ['yoAngularSeedApp']);
});
