(function() {
  'use strict';

  angular
    .module('stackTuto')
    .directive('notebook', notebook);

  function notebook() {
    var directive = {
      restrict: 'E', // Element <notebook></notebook>
      templateUrl: 'app/components/notebook/notebook.html',
      scope: { // Scope c'est pour injecter une variable <notebook data=variable></notebook>
        data: '='
      },
      controller: NotebookController,
      controllerAs: 'notebk',
      bindToController: true // important, c'est pour injecter la variable data
    };

    return directive;

    function NotebookController() {
      var notebk = this;

      notebk.openNotebk = function() { // fonction qui ouvre une facture (note)
        console.log('open', notebk.data.id);
      }
    }
  }
})();
