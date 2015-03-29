'use strict';

/**
 * @ngdoc function
 * @name chooseOneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the chooseOneApp
 */
angular.module('chooseOneApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
