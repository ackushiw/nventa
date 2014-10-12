'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('MainCtrl', function ($scope, EventFactory, $timeout) {    
    $scope.eventsList = EventFactory.all;
  });
