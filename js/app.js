var app = angular.module('RestAngular', ['ngRoute', 'restangular']);

app
//Routing
.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: "templates/home.html",
            controller: "HomeCtrl"
        })
        .otherwise({
            redirectTo: '/'
        });
})

// Restangular config
.config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl(
        'http://127.0.0.1:8000/');
})

.config(function(RestangularProvider) {
    // add a response intereceptor
    RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      var extractedData;
      // .. to look for getList operations
      if (operation === "getList") {
        // .. and handle the data and meta data
        extractedData = data.snippets;
      } else {
        extractedData = data;
      }
      return extractedData;
    });
})


;