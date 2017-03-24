app

.controller('HomeCtrl', function ($scope, Restangular) {
    $scope.msg = "Hello";

    // First way of creating a Restangular object.
    // Just saying the base URL
    var baseUsers = Restangular.all('users/');

    // This will query /snippets and return a promise
    baseUsers.getList().then(function(users) {
      $scope.allUsers= users;
    });


    // Does GET /snippets
    // Returns an empty array by default. Once a value is returned from the server
    // that array is filled with those values. So you can use this in your template
    $scope.snippets = Restangular.all('users')
        .getList().$object;
    console.log($scope.snippets);

    var newUser = {username: "admin"+ Math.random()};

    // POST /accounts
    baseUsers.post(newUser);
/*
    // GET to URL
    Restangular.allUrl('googlers', url).getList();

    // GET to URL/1
    Restangular.oneUrl('googlers', url+'1').get();
*/
})

;