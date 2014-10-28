'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:GlobalCtrl
 * @description
 * # GlobalCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('GlobalCtrl', function($scope, $timeout, $mdSidenav) { 	
    $scope.openLeftMenu = function() {
      $mdSidenav('left').toggle();
    };
    $scope.closeLeftMenu = function () {
    	$mdSidenav('left').close();
    };
    $scope.openRightMenu = function() {
    	$mdSidenav('right').toggle();
    	$scope.rightMenu = true;
    };    
    $scope.closeRightMenu = function () {
    	$mdSidenav('right').close();
    	$scope.rightMenu = false;
    };
  });
