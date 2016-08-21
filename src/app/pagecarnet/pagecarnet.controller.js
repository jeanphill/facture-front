(function() {
  'use strict';

  angular
    .module('stackTuto')
    .controller('PagecarnetController', PagecarnetController);

  function PagecarnetController($location, facture, $stateParams) {
    var pCarnet = this;

    pCarnet.id = $stateParams.carnetId;
    facture.getFactures(pCarnet.id)
      .then(function success(res) {
        pCarnet.factures = res.data.factures;
        console.log(res.data);
      }, function error(res) {
        console.log(res);
      });

    pCarnet.newFacture = function() {
      facture.new(pCarnet.id)
        .then(function success(res) {
          pCarnet.factures.push([]);
        }, function error(res) {
          console.log(res);
        });
    }

    pCarnet.back = function() {
      $location.path('/home');
    }
  }
})();
