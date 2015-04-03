'use strict';

/**
 * @ngdoc function
 * @name chooseOneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chooseOneApp
 */
angular.module('chooseOneApp')
  .controller('MainCtrl', function ($scope) {

    var main = this;

    var nextLevelFilms = [];

    main.films = [
      {
        name: 'Frozen'
      },
      {
        name: 'Wall-e'
      },
      {
        name: 'Brave'
      },
      {
        name: 'Lion King'
      },
      {
        name: 'Snow white'
      }
    ];

    var setFilms = function () {
      // Om längden på listan är 1 så ska den automatiskt flyttas upp till nästa lista
      // den promotas alltså, får ett litet övertag, men det är ok
      // när films är tom eller längd 1 så sätts films = nextLevelFilms och nextLevelFilms sätts till
      // tom lista
      // Om films efter omsättningen är längd 1 så har en film vunnit!
      console.log('setFilms after it all', angular.toJson(main.films));
      
    };

    main.clickedOne = function (pickedFilm) {
      nextLevelFilms.push(pickedFilm);
      setFilms(pickedFilm);
    };

    main.startNewRound = function () {
      console.log(angular.toJson(main.films));
      main.currentFilmOne = main.films.shift();
      console.log(angular.toJson(main.films));
      main.currentFilmTwo = main.films.shift();
      console.log(angular.toJson(main.films));
      main.roundIsStarted = true;
    };

    

  });
