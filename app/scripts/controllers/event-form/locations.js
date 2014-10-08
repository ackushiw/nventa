'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventFormLocationsCtrl
 * @description
 * # EventFormLocationsCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('EventFormLocationsCtrl', function ($scope, FBURL, $firebase) {
    var fireRef = new Firebase(FBURL + 'eventLocations');
    var sync = $firebase(fireRef);  
    $scope.addEventInfo = function(eventId, eventLocations){
    	console.log(eventId);    	
    	sync.$set(eventId, eventLocations);
    };
  });
