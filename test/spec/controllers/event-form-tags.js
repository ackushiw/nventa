'use strict';

describe('Controller: EventFormTagsCtrl', function () {

  // load the controller's module
  beforeEach(module('nventaApp'));

  var EventFormTagsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventFormTagsCtrl = $controller('EventFormTagsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
