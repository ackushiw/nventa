'use strict';

describe('Directive: eventFormInfo', function () {

  // load the directive's module
  beforeEach(module('nventaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<event-form-info></event-form-info>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the eventFormInfo directive');
  }));
});
