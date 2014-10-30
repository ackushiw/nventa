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
        
        this.eventId = $scope.eventCard.$id;

        var data = EventFactory.find(this.eventId);
        data.$loaded().then(function(fireData) {
            //console.log(fireData);
            fireData.$bindTo($scope, 'eventData');
        });

        var eventInfo = EventFactory.findInfo(this.eventId);
        eventInfo.$loaded().then(function(fireData) {
            fireData.$bindTo($scope, 'eventInfo');
        }); 

        var eventTimes = EventFactory.findTimes(this.eventId);
        eventTimes.$loaded().then(function(fireData) {
            fireData.$bindTo($scope, 'eventTimes');
        });

        var eventLocals = EventFactory.findLocals(this.eventId);
        eventLocals.$loaded().then(function(fireData) {
            fireData.$bindTo($scope, 'eventLocals');
        });        


        $scope.removeEvent = function(id) {
            EventFactory.delete(id);
            console.log(id + ' deleted from firebase!');
        };

        $scope.cardDetailToggle = function () {
            $scope.cardDetailView = ($scope.cardDetailView == false) ? true : false;
        };
        $scope.cardSettingsToggle = function (){
            $scope.cardSettingsView = ($scope.cardSettingsView == false) ? true : false;
        };
        $scope.cardSettingsOpen = function (){
            $scope.cardSettingsView = true;
        }
        $scope.cardSettingsClose = function (){
            $scope.cardSettingsView = false;
        }
    });
