(function() {
  'use strict';

  angular
    .module('stackTuto')
    .controller('HomeController', HomeController);

  function HomeController(carnet) {
    var home = this;
    home.carnets = carnet.getCarnets(); // récupère l'object javascript data dans notebook.service

    home.newCarnet = function() {
      carnet.addCarnet(home.carnetTitle);
    }
  }
})();
