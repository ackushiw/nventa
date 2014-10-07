'use strict';

/**
 * @ngdoc directive
 * @name nventaApp.directive:create
 * @description
 * # create
 */
angular.module('nventaApp')
  .directive('create', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/create.html',
      controller: 'CreateCtrl'
    };
  });
