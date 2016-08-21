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
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginController',
        controllerAs: 'loginCtrl'
      })
      .state('registerCtrl', {
        url: '/register',
        templateUrl: 'app/register/register.html',
        controller: 'RegisterController',
        controllerAs: 'registerCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
