(function() {
  'use strict';

  angular
    .module('stackTuto')
    .controller('HomeController', HomeController);

  function HomeController(carnet) {
    var home = this;
    carnet.getCarnets()
      .then(function success(res) {
        home.carnets = res.data.carnets;
      }, function error(res) {
        console.log(res);
      }); // récupère l'object javascript data dans notebook.service

    home.newCarnet = function() {
      carnet.addCarnet(home.carnetTitle)
        .then(function success(res) {
          home.carnets.push({ title: home.carnetTitle });
        }, function error(res) {
          console.log(res);
        });
    }


  }
})();
