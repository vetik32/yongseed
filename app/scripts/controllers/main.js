'use strict';

/**
 * @ngdoc function
 * @name yoAngularSeedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularSeedApp
 */
angular.module('yoAngularSeedApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
