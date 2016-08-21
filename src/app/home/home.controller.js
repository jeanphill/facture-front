(function() {
  'use strict';

  angular
    .module('stackTuto')
    .controller('HomeController', HomeController);

  function HomeController($location, carnet, login, localStorageService) {
    var home = this;
    carnet.getCarnets()
      .then(function success(res) {
        home.carnets = res.data.carnets;
      }, function error(res) {
        console.log(res);
      });

    home.newCarnet = function() {
      carnet.addCarnet(home.carnetTitle)
        .then(function success(res) {
          if(res.data.success) home.carnets.push(res.data.carnet);
          else console.log('save carnet pas marché');
        }, function error(res) {
          console.log(res);
        });
    }

    home.logout = function() {
      login.logout()
        .then(function success(res) {
          if(res.data.success) {
            localStorageService.remove('session');
            $location.path('/login');
          } else {
            console.log('deconnexion pas marché');
          }
        }, function error(res) {
          console.log(res);
        });
    }

  }
})();
