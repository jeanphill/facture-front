(function() {
  'use strict';

  angular
    .module('stackTuto')
    .directive('notebook', notebook);

  function notebook() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/notebook/notebook.html',
      scope: {
        data: '='
      },
      controller: NotebookController,
      controllerAs: 'notebk',
      bindToController: true
    };

    return directive;

    function NotebookController() {
      var notebk = this;

      notebk.openNotebk = function() {
        console.log('open', notebk.data.id);
      }
    }
  }
})();
