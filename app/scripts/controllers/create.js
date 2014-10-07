'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('CreateCtrl', ['$scope', 'FBURL', '$firebase', '$location', '$anchorScroll', function ($scope, FBURL, $firebase, $location, $anchorScroll) {
  	var fireRef = new Firebase(FBURL + 'events');
  	var sync = $firebase(fireRef);
    $scope.createEvent = function (title, description, privacy){
    	var newEvent = {
    		'title': title,
    		'description': description,
    		'created': Firebase.ServerValue.TIMESTAMP,
    		'author': '$scope.auth.uid',
    		'private': privacy
    	};
    	sync.$push(newEvent).then(function(newChildRef){
    		$scope.eventId = newChildRef.name();
    		$location.hash('event-add-ons');
    		$anchorScroll();
    	});
    };
  }]);
