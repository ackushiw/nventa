'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventFormLocationsCtrl
 * @description
 * # EventFormLocationsCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('EventFormLocationsCtrl', function ($scope, FBURL, $firebase, $localStorage) {
    var fireRef = new Firebase(FBURL + 'eventLocations');
    var sync = $firebase(fireRef);

    $scope.$storage = $localStorage;
    $scope.eventLocals = {
    	input: '',
    	address: '',
    	addressLatLng: ''
    };
    $scope.codeAddress = function(address) {
      geocoder.geocode({
        'address': address
      }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          console.log(results);
          $scope.eventLocals.addressLatLng = results[0].geometry.location;
          $scope.eventLocals.address = results[0].formatted_address;
        } else {
          console.log(status);
        }
      });
    };
    $scope.addEventLocals = function(eventId, eventLocations){
    	console.log(eventId);
    	console.log(angular.toJson(eventLocations));   	
    	sync.$set($scope.$storage.eventId, eventLocations);
    };
  });
