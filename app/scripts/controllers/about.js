'use strict';

/**
 * @ngdoc function
 * @name yoAngularSeedApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoAngularSeedApp
 */
angular.module('yoAngularSeedApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
