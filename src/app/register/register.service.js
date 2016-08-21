(function() {
  'use strict';

  angular
    .module('stackTuto')
    .service('register', register);

  // Le service te servira à récupérer les données, ici on les simule en créant un object javascript
  function register($http, apiUrl) {
    this.save = function(user) {
      return $http({
        method: 'POST',
        data: JSON.stringify(user),
        url: apiUrl.concat('/signup') //localhost:8080/api/signup
      });
    }
  }
})();
