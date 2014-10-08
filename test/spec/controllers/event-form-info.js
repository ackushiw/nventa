'use strict';

describe('Controller: EventFormInfoCtrl', function () {

  // load the controller's module
  beforeEach(module('nventaApp'));

  var EventFormInfoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventFormInfoCtrl = $controller('EventFormInfoCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
