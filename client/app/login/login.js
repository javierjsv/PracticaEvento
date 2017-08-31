'use strict';

angular.module('eventosApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>'
      });
  });
