'use strict';

/**
 * @ngdoc service
 * @name anglar2App.authService
 * @description
 * # authService
 * Service in the anglar2App.
 */
angular.module('anglar2App')
  .service('authService', function ($http, $q, localStorageService,shaService) {

    var fillAuthData = function () {

      var authData = localStorageService.get('authorizationData');
      if (authData) {
        ///set the data heads

      }else {

      }

    };

    return {
      fillAuthData: fillAuthData
    }

  });
