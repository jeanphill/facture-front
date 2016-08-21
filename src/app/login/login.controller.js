(function() {
  'use strict';

  angular
    .module('stackTuto')
    .controller('LoginController', LoginController);

  function LoginController($location, login, localStorageService) {
    var loginCtrl = this;

    loginCtrl.user = {};

    loginCtrl.connect = function() {
      login.auth(loginCtrl.user)
        .then(function success(res) {
          if(res.data.success) {
            $location.path('/');
            localStorageService.set('session', res.data.token);
          }
        }, function error(res) {
          console.log(res);
        });
    }
  }
})();
