app

.controller('HomeCtrl', function ($scope, Restangular, $q) {
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
    $scope.users = Restangular.all('users')
        .getList().$object;
    console.log($scope.users);

    var newUser = {username: "admin"+ Math.random()};

    // POST /accounts
    //baseUsers.post(newUser);

    // GET to URL
    //Restangular.allUrl('googlers', url).getList();

    // GET to URL/1
    //Restangular.oneUrl('googlers', Restangular.baseUrl+'1').get();

    // Just ONE GET to /users/1
    Restangular.one('users/',1).get().then(function(user){
        console.log(user);
    });


})

.controller('ServiceCtrl', function(Users){
    console.log(Users.one(2).get().$object);
    
})

;