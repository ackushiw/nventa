'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventFormUsersCtrl
 * @description
 * # EventFormUsersCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('EventFormUsersCtrl', function ($scope, FBURL, $firebase) {
    var fireRef = new Firebase(FBURL + 'eventUsers');
    var sync = $firebase(fireRef);  
    $scope.addEventInfo = function(eventId, eventUsers){
    	console.log(eventId);    	
    	sync.$set(eventId, eventUsers);
    };
  });
