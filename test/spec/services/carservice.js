'use strict';

describe('Service: carService', function () {

  // load the service's module
  beforeEach(module('anglar2App'));

  // instantiate service
  var carService;
  beforeEach(inject(function (_carService_) {
    carService = _carService_;
  }));

  it('should do something', function () {
    expect(!!carService).toBe(true);
  });

});
