'use strict';

/**
 * @ngdoc filter
 * @name nventaApp.filter:capitalize
 * @function
 * @description
 * # capitalize
 * Filter in the nventaApp.
 */
angular.module('nventaApp')
  .filter('capitalize', function () {
    return function(input, all) {
      return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) : '';
    };
  });
