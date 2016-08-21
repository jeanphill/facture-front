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
      }, function error(res) {
        console.log(res);
      });

    pCarnet.newFacture = function() {
      facture.new(pCarnet.id)
        .then(function success(res) {
          if(res.data.success) pCarnet.factures.push(res.data.facture);
          else console.log('save facture pas marché');
        }, function error(res) {
          console.log(res);
        });
    }

    pCarnet.back = function() {
      $location.path('/home');
    }
  }
})();
