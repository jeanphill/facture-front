(function() {
  'use strict';

  angular
    .module('stackTuto')
    .controller('PagecarnetController', PagecarnetController);

  function PagecarnetController(facture, $stateParams) {
    var pCarnet = this;

    pCarnet.id = $stateParams.carnetId;
    pCarnet.factures = facture.getFactures(pCarnet.id);
  }
})();
