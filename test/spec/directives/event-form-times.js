'use strict';

describe('Directive: eventFormTimes', function () {

  // load the directive's module
  beforeEach(module('nventaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<event-form-times></event-form-times>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the eventFormTimes directive');
  }));
});
