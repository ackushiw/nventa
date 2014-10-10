'use strict';

/**
 * @ngdoc service
 * @name nventaApp.EventFactory
 * @description
 * # EventFactory
 * Factory in the nventaApp.
 */
angular.module('nventaApp')
  .factory('EventFactory', function($rootScope, $firebase, FBURL) {
    // Service logic
    var ref = new Firebase(FBURL + 'events');

    var events = $firebase(ref).$asArray();

    var EventFactory = {
      all: events,

      create: function(eventForm) {
        console.log(eventForm);
        return events.$add(eventForm);
      },
      find: function(eventId) {
        //console.log(eventId);
        //console.log(FBURL + 'events/' + eventId);
        var eventRef = new Firebase(FBURL + 'events/' + eventId);
        var eventSync = $firebase(eventRef).$asObject();
        return eventSync;
      },
      findInfo: function(eventId) {
        //console.log(eventId);
        //console.log(FBURL + 'eventInfo/' + eventId);
        var eventRef = new Firebase(FBURL + 'eventInfo/' + eventId);
        var eventSync = $firebase(eventRef).$asObject();               
        return eventSync;
      },
      filter: function(userId) {
        events.$loaded().then(function(data) {
          var filteredEvents = [];
          console.log('filterStarted for: ' + userId);
          angular.forEach(data, function(dataChild) {

            console.log(dataChild.creator); // Prints items in order they appear in Firebase.

            if (dataChild.creator === userId) {
              var key = dataChild.$id;
              console.log(key);
              this.push(dataChild);
            }
          }, filteredEvents);
          console.log('filterFinished');
          $rootScope.filteredEventsTest = filteredEvents;
          return filteredEvents;
        });

      },
      delete: function(eventId) {
        console.log(eventId);
        return events.$remove(eventId).then(function(ref){
          console.log(ref.name() + ' actually deleted from firebase');
        });
      }
    };

    // Public API here
    return EventFactory;
  });
