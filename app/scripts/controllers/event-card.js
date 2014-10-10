'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventCardCtrl
 * @description
 * # EventCardCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
    .controller('EventCardCtrl', function($scope, EventFactory, $firebase) {
    	this.eventId = $scope.eventCard.$id;
    	this.eventData = {};
    	var data = EventFactory.find(this.eventId);
        data.$loaded().then(function (fireData){
        	console.log(fireData);
        	fireData.$bindTo($scope, 'eventData');
        });
        this.eventInfo = {};

        $scope.infoTab = function (eventId) {
            var eventInfo = EventFactory.findInfo(eventId);
            eventInfo.$loaded().then(function (fireData){
            	fireData.$bindTo($scope, 'eventInfo');
            });            
        };

        $scope.removeEvent = function (id) {
            EventFactory.delete(id);
            console.log(id + ' deleted from firebase!');
        };
    });
