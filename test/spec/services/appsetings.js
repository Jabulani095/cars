'use strict';

describe('Service: appsetings', function () {

  // load the service's module
  beforeEach(module('anglar2App'));

  // instantiate service
  var appsetings;
  beforeEach(inject(function (_appsetings_) {
    appsetings = _appsetings_;
  }));

  it('should do something', function () {
    expect(!!appsetings).toBe(true);
  });

});
