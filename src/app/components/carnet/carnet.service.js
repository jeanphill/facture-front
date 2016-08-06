(function() {
  'use strict';

  angular
    .module('stackTuto')
    .service('carnet', carnet);

  // Le service te servira à récupérer les données, ici on les simule en créant un object javascript
  function carnet() {
    var i = 4;
    // data est un objet javascript
    var carnets = [
      {
        'id': 1,
        'title': 'carrefour'
      },
      {
        'id': 2,
        'title': 'electricite'
      },
      {
        'id': 3,
        'title': 'blalba'
      }
    ];

    this.getCarnets = getCarnets;

    function getCarnets() {
      return carnets;
    }

    this.addCarnet = function(title) {
      var carnet = {
        'id': i,
        'title': title
      };
      carnets.push(carnet);
      ++i;
    }
  }
})();
