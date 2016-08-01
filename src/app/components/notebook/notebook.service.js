(function() {
  'use strict';

  angular
    .module('stackTuto')
    .service('notebook', notebook);

  /** @ngInject */
  function notebook() {
    var data = [
      {
        'id': 0,
        'title': 'Carrefour Courses'
      },
      {
        'id': 1,
        'title': 'Commandes pro'
      },
      {
        'id': 2,
        'title': 'Personnel'
      }
    ];

    this.getNotebook = getNotebook;

    function getNotebook() {
      return data;
    }
  }
})();
