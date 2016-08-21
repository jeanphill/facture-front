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
        facture: '='
      },
      controller: FactureController,
      controllerAs: 'factureCtrl',
      bindToController: true
    };

    return directive;

    function FactureController($location, facture) {
      var factureCtrl = this;

      factureCtrl.addProduit = function() {
        factureCtrl.facture.produits.push({
          nom: '',
          prix: ''
        });
      }

      factureCtrl.supprProduit = function(index) {
        factureCtrl.facture.produits.splice(index, 1);
      }

      factureCtrl.saveFacture = function() {
        facture.save(factureCtrl.facture);
      }

      factureCtrl.supprFacture = function() {
        facture.delete(factureCtrl.facture);
      }


      factureCtrl.getTotal = function () {
        var total = 0;
        for (var i=0; i < factureCtrl.produits.length; i++)
        {
          var prod = factureCtrl.produits[i];
          total += prod.prix;
        }
        return total;
      }


    }
  }
})();
