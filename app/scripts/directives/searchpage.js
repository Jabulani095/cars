'use strict';

/**
 * @ngdoc directive
 * @name anglar2App.directive:searchPage
 * @description
 * # searchPage
 */
angular.module('anglar2App')
  .directive('searchPage', function (carService) {

    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'views/search-page.html',
      link: function postLink(scope, element, attrs) {
        $('select').material_select();
       scope.searchData = {"transmission": 0, "fuelType": 0, "priceRange": 1.1};
       scope.buildSearch = {model:'',make:'',year:''};

       scope.$watchCollection('buildSearch',function (newValue,oldValue) {
         scope.searchData.model = [];
         scope.searchData.makes = [];
         scope.searchData.years = [];
         scope.searchData.model.push(newValue.model);
         scope.searchData.makes.push(newValue.make);
         scope.searchData.years.push(newValue.year);
       });


       scope.getCar = function () {

         carService.getCar(scope.searchData)
           .then(function (res) {

           },function (err) {

           })
       }
      }
    };
  });
