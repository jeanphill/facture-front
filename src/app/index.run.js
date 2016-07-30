(function() {
  'use strict';

  angular
    .module('stackTuto')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
