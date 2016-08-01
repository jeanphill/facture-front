(function() {
  'use strict';

  angular
    .module('stackTuto')
    .service('notebook', notebook);

  // Le service te servira à récupérer les données, ici on les simule en créant un object javascript
  function notebook() {
    // data est un objet javascript
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
