app

.controller('HomeCtrl', function ($scope, Restangular) {
    $scope.msg = "Hello";
    var url = 'http://127.0.0.1/';

    // First way of creating a Restangular object.
    // Just saying the base URL
    var baseSnippets = Restangular.all('snippets/');

    // This will query /snippets and return a promise
    baseSnippets.getList().then(function(snippets) {
      $scope.allSnippets = snippets;
      console.log($scope.allSnippets);
    });


    // Does GET /snippets
    // Returns an empty array by default. Once a value is returned from the server
    // that array is filled with those values. So you can use this in your template
    $scope.snippets = Restangular.all('snippets/')
        .getList().$object;
    console.log($scope.snippets);

    /* Desconsidera daqui pra baixo
    var newAccount = {name: "Luan's account"};

    // POST /accounts
    baseAccounts.post(newAccount);

    // GET to URL
    Restangular.allUrl('googlers', url).getList();

    // GET to URL/1
    Restangular.oneUrl('googlers', url+'1').get();

*/
})

;