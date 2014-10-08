'use strict';

/**
 * @ngdoc directive
 * @name nventaApp.directive:eventFormTimes
 * @description
 * # eventFormTimes
 */
angular.module('nventaApp')
  .directive('eventFormTimes', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/event-form/times.html'
    };
  });
