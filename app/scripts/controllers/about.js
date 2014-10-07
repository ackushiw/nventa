'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
