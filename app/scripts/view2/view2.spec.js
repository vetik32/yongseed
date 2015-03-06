'use strict';

describe('yoAngularSeedApp.view1 module', function() {

  beforeEach(module('yoAngularSeedApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($injector) {
      //spec body
      var view1Ctrl = $injector.$get('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});
