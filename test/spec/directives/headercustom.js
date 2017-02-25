'use strict';

describe('Directive: headerCustom', function () {

  // load the directive's module
  beforeEach(module('anglar2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<header-custom></header-custom>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the headerCustom directive');
  }));
});
