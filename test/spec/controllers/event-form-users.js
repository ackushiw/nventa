'use strict';

describe('Controller: EventFormUsersCtrl', function () {

  // load the controller's module
  beforeEach(module('nventaApp'));

  var EventFormUsersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventFormUsersCtrl = $controller('EventFormUsersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
