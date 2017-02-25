'use strict';

/**
 * @ngdoc service
 * @name anglar2App.carService
 * @description
 * # carService
 * Service in the anglar2App.
 */
angular.module('anglar2App')
  .service('carService', function ($http,$q,appsetings) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var getCar = function (searchQuery) {
      var q = $q.defer();
      $http.post(appsetings.serviceUrl+'api/car/search',searchQuery)
        .then(function(response) {
          q.resolve(response);
        }, function (err) {
          q.reject(err.data,err.status);
        });
      return q.promise;
    }

    return {
      getCar:getCar
    }
  });
