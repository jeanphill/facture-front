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
      return $http({
        method: 'DELETE',
        headers: { 'x-access-token': localStorageService.get('session') },
        url: apiUrl.concat('/facture/' + facture._id)
      });
    }

    this.save = function(pFacture) {
      return $http({
        method: 'PATCH',
        headers: { 'x-access-token': localStorageService.get('session') },
        data: JSON.stringify(pFacture),
        url: apiUrl.concat('/facture/' + pFacture._id)
      });
    }
  }
})();
