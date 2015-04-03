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
    main.roundIsStarted = false;
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

    var setFilms = function (pickedFilm) {
      // nextLevelFilms.push(pickedFilm);

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
          console.log('SetFilms length 0', 'new round!');
          main.roundIsStarted = false;
        }
      }

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
