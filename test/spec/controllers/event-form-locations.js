'use strict';

describe('Controller: EventFormLocationsCtrl', function () {

  // load the controller's module
  beforeEach(module('nventaApp'));

  var EventFormLocationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventFormLocationsCtrl = $controller('EventFormLocationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
