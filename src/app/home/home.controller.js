(function() {
  'use strict';

  angular
    .module('stackTuto')
    .controller('HomeController', HomeController);

  function HomeController(notebook) {
    var home = this;
    home.notebook = notebook.getNotebook(); // récupère l'object javascript data dans notebook.service
  }
})();
