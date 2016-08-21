(function() {
  'use strict';

  angular
    .module('stackTuto')
    .run(runBlock);

  function runBlock($log, $rootScope, $location, login) {
    $rootScope.$on("$stateChangeStart", function(event, next, current) {
      login.isAuthenticated()
        .then(function success(res) {
          if(!res.data.auth && next.url !== '/login') $location.path('/login');
        });
    });

    $log.debug('runBlock end');
  }

})();
