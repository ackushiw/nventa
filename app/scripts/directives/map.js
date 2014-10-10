'use strict';

/**
 * @ngdoc directive
 * @name nventaApp.directive:map
 * @description
 * # map
 */
angular.module('nventaApp')
  .directive('map', function() {
    return {
      template: '<section><div ui-map="myMap" ui-options="mapOptions" class="map-canvas" style="height:500px;"></div></section>',
      restrict: 'E',
      controller: function($scope) {
        $scope.mapOptions = {
          center: new google.maps.LatLng(40.784, -73.670),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP

        };
      }
    };
  });
