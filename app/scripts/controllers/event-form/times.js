'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:EventFormTimesCtrl
 * @description
 * # EventFormTimesCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
    .controller('EventFormTimesCtrl', function($scope, FBURL, $firebase) {
        this.today = new Date();
        $scope.eventTimes = {
            startTime: this.today,
            end: this.today
        };
        var fireRef = new Firebase(FBURL + 'eventTimes');
        var sync = $firebase(fireRef);
        $scope.addEventTimes = function(eventId, timeData) {
            console.log('times id: ' + eventId);
            console.log(angular.toJson(timeData));
            sync.$set(eventId, angular.fromJson(angular.toJson(timeData)));
        };
        $scope.today = function() {
            $scope.eventTimes = {
                start: this.today
            };
        };
        $scope.today();
        $scope.endMinDate = this.today;
        $scope.$watch('eventTimes.startTime', function(newDate, oldDate) {
            $scope.endMinDate = newDate;            
        });

        $scope.clear = function() {
            $scope.eventTimes = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            $scope.opened = true;
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];


        $scope.hstep = 1;
        $scope.mstep = 1;

        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.ismeridian = true;
        $scope.toggleMode = function() {
            $scope.ismeridian = !$scope.ismeridian;
        };

        $scope.update = function() {
            var d = new Date();
            d.setHours(14);
            d.setMinutes(0);
            $scope.mytime = d;
        };
        $scope.changed = function(value) {
            console.log('Time changed to: ' + value + angular.isDate(value));
        };

    });
