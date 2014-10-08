'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventFormTimesCtrl
 * @description
 * # EventFormTimesCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('EventFormTimesCtrl', function ($scope, FBURL, $firebase) {
    var fireRef = new Firebase(FBURL + 'eventTimes');
    var sync = $firebase(fireRef);  
    $scope.addEventInfo = function(eventId, eventTimes){
    	console.log(eventId);    	
    	sync.$set(eventId, eventTimes);
    };
  });
