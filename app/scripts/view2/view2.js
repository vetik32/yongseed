'use strict';

angular.module('yoAngularSeedApp.view2', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'scripts/view2/view2.html',
      controller: 'View2Ctrl'
    });
  }])

  .controller('View2Ctrl', [function() {

  }]);
