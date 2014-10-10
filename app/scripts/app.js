'use strict';

/**
 * @ngdoc overview
 * @name nventaApp
 * @description
 * # nventaApp
 *
 * Main module of the application.
 */
function onGoogleReady() {
  console.log('google maps loaded!');

  angular.bootstrap(document.getElementById('map'), ['nventaApp']);
}
//console.log(onGoogleReady());


angular.module('nventaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'firebase',
    'firebase.utils',
    'simpleLogin',
    'ui.utils',
    'ui.bootstrap',
    'ui.select',
    'ui.router',
    'ui.map'
  ]);
