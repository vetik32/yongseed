'use strict';

xdescribe('yoAngularSeedApp.view1 module', function() {

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

    it('should be defined', function() {
      //spec body
      var view1Ctrl = createController();
      expect(view1Ctrl).toBeDefined();
    });

  });
});
