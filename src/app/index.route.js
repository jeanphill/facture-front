(function() {
  'use strict';

  angular
    .module('stackTuto')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('pagecarnet', {
        url: '/carnet/:carnetId',
        templateUrl: 'app/pagecarnet/pagecarnet.html',
        controller: 'PagecarnetController',
        controllerAs: 'pCarnet'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
