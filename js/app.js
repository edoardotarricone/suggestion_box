var app = angular.module('SuggestionBox', []);
app.config(function ($routeProvider) {
  $routeProvider .when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  }).otherwise({
    templateUrl: '/'
  });
});
