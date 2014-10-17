'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventFormMoneyCtrl
 * @description
 * # EventFormMoneyCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('EventFormMoneyCtrl', function ($scope, FBURL, $firebase) {
    var fireRef = new Firebase(FBURL + 'eventMoney');
    var sync = $firebase(fireRef);  
    $scope.addEventInfo = function(eventId, eventMoney){
    	console.log(eventId);    	
    	sync.$set($scope.$storage.eventId, eventMoney);
    };
  });
