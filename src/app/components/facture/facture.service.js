(function() {
  'use strict';

  angular
    .module('stackTuto')
    .service('facture', facture);

  // Le service te servira à récupérer les données, ici on les simule en créant un object javascript
  function facture() {
    var i = 4;
    // data est un objet javascript
    var factures = [
      {
        'id': 1,
        'idCarnet': 1,
        'produits': [{
          'nom':'Orange',
          'prix': 3.5,
        }, {
          'nom':'Ananas',
          'prix': 4.0,
        }, {
          'nom':'Lait',
          'prix':5.7,
        }]
      }
    ];

    this.getFactures = function(idCarnet) {
      var facturesReturn = [];
      for(var facture in factures) {
        if(factures[facture].idCarnet == idCarnet) facturesReturn.push(factures[facture]);
      }
      return facturesReturn;
    }
  }
})();
