(function() {
  'use strict';

  angular
    .module('stackTuto')
    .service('login', login);

  // Le service te servira à récupérer les données, ici on les simule en créant un object javascript
  function login($http, apiUrl) {
    this.auth = function(user) {
      return $http({
        method: 'GET',
        url: apiUrl.concat('/signin?username=' +  user.username + '&password=' + user.password)
      });
    }
  }
})();
