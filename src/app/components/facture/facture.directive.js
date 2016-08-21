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

      factureCtrl.deleted = false;

      factureCtrl.addProduit = function() {
        factureCtrl.facture.produits.push({
          name: '',
          price: ''
        });
      }

      factureCtrl.supprProduit = function(index) {
        factureCtrl.facture.produits.splice(index, 1);
      }

      factureCtrl.saveFacture = function() {
        facture.save(factureCtrl.facture)
          .then(function success(res) {
            console.log(res);
          }, function error(res) {
            console.log(res);
          });
      }

      factureCtrl.supprFacture = function() {
        facture.delete(factureCtrl.facture)
          .then(function success(res) {
            if(res.data.success) factureCtrl.deleted = true;
            else console.log('delete pas marché');
          }, function error(res) {
            console.log(res);
          });
      }

      factureCtrl.getTotal = function () {
        var total = 0;
        if(!factureCtrl.facture.produits) return total;
        for (var i=0; i < factureCtrl.facture.produits.length; i++) {
          var prod = factureCtrl.facture.produits[i];
          total += Number(prod.price);
        }
        return total;
      }

      factureCtrl.isDeleted = function() {
        return factureCtrl.deleted;
      }

    }
  }
})();
