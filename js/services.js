app

.factory('Users', function(Restangular){
    return Restangular.service('users/');
})

;