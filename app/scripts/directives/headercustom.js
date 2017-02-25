'use strict';

/**
 * @ngdoc directive
 * @name anglar2App.directive:headerCustom
 * @description
 * # headerCustom
 */
angular.module('anglar2App')
  .directive('headerCustom', function ($location) {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'views/header-custom.html',
      link: function postLink(scope, element, attrs) {
         scope.aboutpage = function () {
           $location.path('/about');
         }

         scope.applypage = function () {

         }
      }
    };
  });
