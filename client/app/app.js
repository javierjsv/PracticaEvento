'use strict';

angular.module('eventosApp', [
  'eventosApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'satellizer'
  ])
  .constant("API", "http://localhost:8080")
  .config(function($urlRouterProvider, $locationProvider,$authProvider,API) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);

    // Config Satellizer
        $authProvider.loginUrl = API + '/api/auth/login';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'eventosApp';
  });
