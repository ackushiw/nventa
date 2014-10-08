'use strict';

/**
 * @ngdoc directive
 * @name nventaApp.directive:eventCard
 * @description
 * # eventCard
 */
angular.module('nventaApp')
  .directive('eventCard', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/event-card.html',
      controller: 'EventCardCtrl',
      controllerAs: 'eventCardCtrl'
    };
  });
