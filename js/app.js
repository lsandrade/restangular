var app = angular.module('RestAngular', ['ngRoute', 'restangular']);

app
//Routing
.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: "templates/home.html",
            controller: "HomeCtrl"
        })
        .when('/service',{
            templateUrl: "templates/service.html",
            controller: "ServiceCtrl"
        })
        .otherwise({
            redirectTo: '/'
        });
})

.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://127.0.0.1:8000');
  RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
      var extractedData;
      if (operation === "getList") {
        extractedData = data.results;
      } else {
        extractedData = data;
      }
      return extractedData;
    });
})

;