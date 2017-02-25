'use strict';

describe('Service: shaService', function () {

  // load the service's module
  beforeEach(module('anglar2App'));

  // instantiate service
  var shaService;
  beforeEach(inject(function (_shaService_) {
    shaService = _shaService_;
  }));

  it('should do something', function () {
    expect(!!shaService).toBe(true);
  });

});
