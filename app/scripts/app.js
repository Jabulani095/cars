'use strict';

/**
 * @ngdoc overview
 * @name anglar2App
 * @description
 * # anglar2App
 *
 * Main module of the application.
 */
angular
  .module('anglar2App', [
    'angular-loading-bar',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/carRoute', {
        templateUrl: 'views/carroute.html',
        controller: 'CarrouteCtrl',
        controllerAs: 'carRoute'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/apply', {
        templateUrl: 'views/apply.html',
        controller: 'ApplyCtrl',
        controllerAs: 'apply'
      })
      .otherwise({
        redirectTo: '/main'
      });
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
  })
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push("authInterceptorService");
  })
  .run(function (authService, $rootScope, $location) {
      authService.fillAuthData();
  });

