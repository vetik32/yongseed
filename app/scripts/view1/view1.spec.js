'use strict';

describe('yoAngularSeedApp.view1 module', function() {

  var $scope, createController;

  beforeEach(module('yoAngularSeedApp.view1'));


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector) {
    var $controller = $injector.get('$controller');
    var $rootScope = $injector.get('$rootScope');

    $scope = $rootScope.$new();
    $scope.$digest();

    createController = function () {
      return $controller('View1Ctrl', {
        '$scope': $scope
      });
    };

  }));

  describe('view1 controller', function(){

    it('should ....', inject(function($injector) {
      //spec body
      var view1Ctrl = $injector.get('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
