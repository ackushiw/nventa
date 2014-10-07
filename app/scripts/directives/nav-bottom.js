'use strict';

/**
 * @ngdoc directive
 * @name nventaApp.directive:navBottom
 * @description
 * # navBottom
 */
angular.module('nventaApp')
  .directive('navBottom', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/nav-bottom.html',
      controller: 'NavBottomCtrl'      
    };
  });
