var app = angular.module('craftsApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/craft',
      {
        controller: 'CraftsController',
        templateUrl: '/app/partials/craft.html'
      });
});
