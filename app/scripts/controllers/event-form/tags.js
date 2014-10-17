'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventFormTagsCtrl
 * @description
 * # EventFormTagsCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('EventFormTagsCtrl', function($scope, FBURL, $firebase) {
    var fireRef = new Firebase(FBURL + 'eventTags/').child($scope.$storage.eventId);
    var sync = $firebase(fireRef);
    $scope.eventTagsList = {};
    $scope.eventTagsList = sync.$asArray();
    

    $scope.tagsList = [];
    var fireTagList = [];

    

    $scope.pushTag = function($event, tag) {
      $scope.eventTagsList.$add(tag);
      $scope.event.tag = null;      
    };
    $scope.removeTag = function(index) {
      $scope.eventTagsList.$remove(index);
    };

    $scope.addEventInfo = function(eventId, eventTags) {
      console.log(eventId);
      sync.$set($scope.$storage.eventId, eventTags);
    };
  });
