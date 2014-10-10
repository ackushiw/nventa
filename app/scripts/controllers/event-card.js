'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventCardCtrl
 * @description
 * # EventCardCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
    .controller('EventCardCtrl', function($scope, EventFactory) {

        $scope.infoTab = function(eventId) {
            var eventData = EventFactory.findInfo(eventId);
            console.log(eventData.notes);
        };

        $scope.removeEvent = function(id) {
            EventFactory.delete(id);
            console.log(id + ' deleted from firebase!');
        };
    });
