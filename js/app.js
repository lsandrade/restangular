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


;