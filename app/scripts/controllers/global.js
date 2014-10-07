'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('GlobalCtrl', function($scope, $materialSidenav) {
    $scope.openLeftMenu = function() {
      $materialSidenav('left').toggle();
    };
  });
