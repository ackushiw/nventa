'use strict';

/**
 * @ngdoc service
 * @name nventaApp.datasource
 * @description
 * # datasource
 * Factory in the nventaApp.
 */
angular.module('nventaApp')
    .factory('datasource', [
        '$log', '$timeout',
        function(console, $timeout) {
            var get;
            get = function(index, count, success) {
                return $timeout(function() {
                    var i, result, _i, _ref;
                    result = [];

                    for (i = _i = index, _ref = index + count - 1; index <= _ref ? _i <= _ref : _i >= _ref; i = index <= _ref ? ++_i : --_i) {
                        result.push("item #" + i);
                    }
                    return success(result);
                }, 100);
            };
            return {
                get: get
            };
        }
    ]);
