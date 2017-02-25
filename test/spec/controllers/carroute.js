'use strict';

describe('Controller: CarrouteCtrl', function () {

  // load the controller's module
  beforeEach(module('anglar2App'));

  var CarrouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarrouteCtrl = $controller('CarrouteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CarrouteCtrl.awesomeThings.length).toBe(3);
  });
});
