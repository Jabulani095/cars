'use strict';

describe('Service: applyService', function () {

  // load the service's module
  beforeEach(module('anglar2App'));

  // instantiate service
  var applyService;
  beforeEach(inject(function (_applyService_) {
    applyService = _applyService_;
  }));

  it('should do something', function () {
    expect(!!applyService).toBe(true);
  });

});
