(function() {
  'use strict';

  angular
    .module('stackTuto')
    .controller('RegisterController', RegisterController);

  function RegisterController($location, register) {
    var registerCtrl = this;

    registerCtrl.user = {};

    registerCtrl.register = function() {
      register.save(registerCtrl.user)
        .then(function success(res) {
          if(res.data.success) $location.path('/login');
        }, function error(res) {
          console.log(res);
        });
    }

  }
})();
