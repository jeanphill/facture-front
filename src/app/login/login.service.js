(function() {
  'use strict';

  angular
    .module('stackTuto')
    .service('login', login);

  function login($http, apiUrl, localStorageService) {
    this.auth = function(user) {
      return $http({
        method: 'GET',
        url: apiUrl.concat('/signin?username=' +  user.username + '&password=' + user.password)
      });
    }

    this.isAuthenticated = function(token) {
      return $http({
        method: 'GET',
        headers: { 'x-access-token': localStorageService.get('session') },
        url: apiUrl.concat('/token')
      });
    }

    this.logout = function() {
      return $http({
        method: 'DELETE',
        headers: { 'x-access-token': localStorageService.get('session') },
        url: apiUrl.concat('/logout')
      });
    }
  }

})();
