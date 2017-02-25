'use strict';

describe('Controller: ApplyCtrl', function () {

  // load the controller's module
  beforeEach(module('anglar2App'));

  var ApplyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApplyCtrl = $controller('ApplyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApplyCtrl.awesomeThings.length).toBe(3);
  });
});
