'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventFormInfoCtrl
 * @description
 * # EventFormInfoCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('EventFormInfoCtrl', function ($scope, FBURL, $firebase) {
    var fireRef = new Firebase(FBURL + 'eventInfo');
    var sync = $firebase(fireRef);  
    $scope.addEventInfo = function(eventId, eventInfo){    	
    	console.log($scope.$storage.eventId);

    	sync.$set($scope.$storage.eventId, eventInfo);
    };
  });
