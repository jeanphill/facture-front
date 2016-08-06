(function() {
  'use strict';

  angular
    .module('stackTuto')
    .directive('facture', facture);

  function facture() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/facture/facture.html',
      scope: {
        data: '='
      },
      controller: FactureController,
      controllerAs: 'factureCtrl',
      bindToController: true
    };

    return directive;

    function FactureController($location) {
      var factureCtrl = this;

      console.log(factureCtrl.data.produits);
    }
  }
})();
