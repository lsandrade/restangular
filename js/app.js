var app = angular.module('restangular', ['ngRoute']);

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