'use strict';

/**
 * @ngdoc function
 * @name chooseOneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chooseOneApp
 */
angular.module('chooseOneApp')
  .controller('MainCtrl', function ($scope, lodash, animatedFilms) {

    var main = this;
    main.roundIsStarted = false;
    main.isFinalRound = false;
    var nextLevelFilms = [];

    main.films = animatedFilms.films;

    var setFilms = function (pickedFilm) {
      if (main.films.length > 1) {
        console.log('More than one film, pushed ' + pickedFilm.name);
        main.currentFilmOne = main.films.shift();
        main.currentFilmTwo = main.films.shift();
      } else {
        if (main.films.length === 1) {
          console.log('only one film left, popping ' + main.films[0].name);
          nextLevelFilms.push(main.films.pop());
        }

        if (main.films.length === 0) {
          main.films = nextLevelFilms;
          console.log('Before shuffle', main.films);
          main.films = lodash.shuffle(main.films);
          console.log('after shuffle', main.films);
          nextLevelFilms = [];

          if (main.films.length === 2) {
            console.log('Final round!');
            main.isFinalRound = true;
          }
          console.log('SetFilms length 0', 'new round!');
          main.roundIsStarted = false;
        }
      }

      console.log('setFilms after it all', angular.toJson(main.films));
      
    };

    main.clickedOne = function (pickedFilm) {
      if (main.isFinalRound) {
        console.log('Winner is picked!', pickedFilm.name);
        main.winner = pickedFilm;
      } else{
        nextLevelFilms.push(pickedFilm);
        setFilms(pickedFilm);
        console.log('Picked film', angular.toJson(nextLevelFilms));
      }
    };

    main.startNewRound = function () {
      main.currentFilmOne = main.films.shift();
      main.currentFilmTwo = main.films.shift();
      main.roundIsStarted = true;
    };
  });
