(function() {
  'use strict';

  angular
    .module('stackTuto')
    .service('carnet', carnet);

  // Le service te servira à récupérer les données, ici on les simule en créant un object javascript
  function carnet($http, apiUrl, localStorageService) {
    this.getCarnets = getCarnets;

    function getCarnets() {
      return $http({
        method: 'GET',
        headers: { 'x-access-token': localStorageService.get('session') },
        url: apiUrl.concat('/carnets')
      });
    }

    this.addCarnet = function(title) {
      return $http({
        method: 'POST',
        headers: { 'x-access-token': localStorageService.get('session') },
        data: { title: title },
        url: apiUrl.concat('/carnet')
      });
    }

    this.delete = function (carnet) {
      return $http({
        method: 'DELETE',
        headers: { 'x-access-token': localStorageService.get('session') },
        url: apiUrl.concat('/carnet/' + carnet._id)
      });
    }
  }
})();
