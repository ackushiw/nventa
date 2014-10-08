'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventFormTagsCtrl
 * @description
 * # EventFormTagsCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('EventFormTagsCtrl', function ($scope, FBURL, $firebase) {
    var fireRef = new Firebase(FBURL + 'eventTags');
    var sync = $firebase(fireRef);  
    $scope.addEventInfo = function(eventId, eventTags){
    	console.log(eventId);    	
    	sync.$set(eventId, eventTags);
    };
  });
