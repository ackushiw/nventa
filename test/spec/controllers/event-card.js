'use strict';

describe('Controller: EventCardCtrl', function () {

  // load the controller's module
  beforeEach(module('nventaApp'));

  var EventCardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventCardCtrl = $controller('EventCardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
