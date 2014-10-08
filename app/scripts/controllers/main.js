'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('MainCtrl', function ($scope, FBURL, $firebase) {
    var fireRef = new Firebase(FBURL + 'events');
    var sync = $firebase(fireRef);  
    $scope.eventsList = sync.$asArray();
  });
