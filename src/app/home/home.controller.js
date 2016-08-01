(function() {
  'use strict';

  angular
    .module('stackTuto')
    .controller('HomeController', HomeController);

  function HomeController(notebook) {
    var vm = this;
    vm.notebook = notebook.getNotebook(); // récupère l'object javascript data dans notebook.service
  }
})();
