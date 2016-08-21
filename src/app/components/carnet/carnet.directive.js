(function() {
  'use strict';

  angular
    .module('stackTuto')
    .directive('carnet', carnet);

  function carnet() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/carnet/carnet.html',
      scope: {
        homeCarnet: '='
      },
      controller: CarnetController,
      controllerAs: 'carnetCtrl',
      bindToController: true
    };

    return directive;

    function CarnetController($location, carnet) {
      var carnetCtrl = this;

      carnetCtrl.openCarnet = function() { // fonction qui ouvre une facture (note)
        $location.path('/carnet/' + carnetCtrl.homeCarnet._id);
      }
      carnetCtrl.supprCarnet = function () {
         carnet.delete(carnetCtrl.homeCarnet)
           .then(function success(res) {
             console.log(res);
           }, function error(res) {
             console.log(res);
           });
      }
    }

  }
})();
