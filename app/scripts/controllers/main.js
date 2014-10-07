'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
