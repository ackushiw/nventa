'use strict';

describe('Controller: NavBottomCtrl', function () {

  // load the controller's module
  beforeEach(module('nventaApp'));

  var NavBottomCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavBottomCtrl = $controller('NavBottomCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
