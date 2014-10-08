'use strict';

/**
 * @ngdoc directive
 * @name nventaApp.directive:eventFormInfo
 * @description
 * # eventFormInfo
 */
angular.module('nventaApp')
  .directive('eventFormInfo', function () {
    return {      
      restrict: 'E',
      templateUrl: 'views/event-form/event-form-info.html'
    };
  });
