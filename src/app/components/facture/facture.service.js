(function() {
  'use strict';

  angular
    .module('stackTuto')
    .service('facture', facture);

  // Le service te servira à récupérer les données, ici on les simule en créant un object javascript
  function facture($http, apiUrl, localStorageService) {

    this.getFactures = function(idCarnet) {
      return $http({
        method: 'GET',
        headers: { 'x-access-token': localStorageService.get('session') },
        url: apiUrl.concat('/carnet/' + idCarnet + '/factures')
      });
    }

    this.new = function(idCarnet) {
      return $http({
        method: 'POST',
        headers: { 'x-access-token': localStorageService.get('session') },
        url: apiUrl.concat('/carnet/' + idCarnet + '/facture')
      });
    }

    this.delete = function(facture) {
      var index = factures.indexOf(facture);
      factures.splice(index, 1);
      console.log(factures);
    }

    this.save = function(pFacture) {
      for(var facture in factures) {
        if(factures[facture].id == pFacture.id) factures[facture] = pFacture;
      }
    }
  }
})();
