'use strict';

/**
 * @ngdoc function
 * @name anglar2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anglar2App
 */
angular.module('anglar2App')
  .controller('MainCtrl', function ($location,$scope,carService) {
    $('select').material_select();
    $scope.OpenAbout = function () {
      var data = {"makes": [], "model": [],"years": [], "transmission": 0, "fuelType": 0, "priceRange": 1.1};
      carService.getCar(data)
        .then(function (res) {
          alert()
          $location.path('/about');
        },function (err,status) {
           alert(JSON.stringify(err));
        });

    }

    $scope.OpenAbout = function () {
      $location.path('/about');
    }

    function addForma () {
       var contentEnter = 'animated slideInLeft';
       var eventsHandling = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
       var searchAnim = 'animated shake';
      $('.card-home').addClass(contentEnter).one(eventsHandling,function () {
        $('.card-home').removeClass(contentEnter);

        $('.home-form').addClass(searchAnim).one(eventsHandling,function () {
          $('.home-form').removeClass(searchAnim);
        })
      })
    }

    addForma();
  });

