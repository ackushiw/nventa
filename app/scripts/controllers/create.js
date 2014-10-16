'use strict';

/**
 * @ngdoc function
 * @name nventaApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the nventaApp
 */
angular.module('nventaApp')
  .controller('CreateCtrl', ['$scope', 'FBURL', '$firebase', '$location', '$anchorScroll',
    function($scope, FBURL, $firebase, $location, $anchorScroll) {
      var fireRef = new Firebase(FBURL + 'events');
      var sync = $firebase(fireRef);
      
      $scope.tagsList = [];
      var fireTagList = [];
      
      $scope.pushTag = function ($event, tag){
        var list = $scope.tagsList;
        console.log('tag: ' + tag);
        var obj = {};
        obj[tag] = true;
        list.push(tag);
        fireTagList.push(obj);
        console.log(list);
        $scope.tagsList = list;
        $scope.event.tag = null;
        console.log(fireTagList);
        
      };
      $scope.removeTag = function (index){
        console.log(index);
        var list = $scope.tagsList;
        list.splice(index, 1);
        fireTagList.splice(index, 1);
        $scope.tagsList = list;
        console.log(fireTagList);
      };
      $scope.createEvent = function(title, description, privacy) {
        var desc = null;
        if (description) {
          desc = description;
        }
        if (title) {
          var newEvent = {
            'title': title,
            'description': desc,
            'created': Firebase.ServerValue.TIMESTAMP,
            'author': '$scope.auth.uid',
            'private': privacy,
            'tags': fireTagList
          };
          sync.$push(newEvent).then(function(newChildRef) {
            var idOfEvent = newChildRef.name();
            $scope.eventId = idOfEvent;            
            $location.hash('event-add-ons');
            $anchorScroll();
          });
        }
      };
    }
  ]);
