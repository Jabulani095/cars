'use strict';

describe('Directive: footerCustom', function () {

  // load the directive's module
  beforeEach(module('anglar2App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<footer-custom></footer-custom>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the footerCustom directive');
  }));
});
