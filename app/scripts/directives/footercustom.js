'use strict';

/**
 * @ngdoc directive
 * @name anglar2App.directive:footerCustom
 * @description
 * # footerCustom
 */
angular.module('anglar2App')
  .directive('footerCustom', function () {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'views/footer-custom.html',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
