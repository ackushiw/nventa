'use strict';

describe('Controller: EventFormMoneyCtrl', function () {

  // load the controller's module
  beforeEach(module('nventaApp'));

  var EventFormMoneyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EventFormMoneyCtrl = $controller('EventFormMoneyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
