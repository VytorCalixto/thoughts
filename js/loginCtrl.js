/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('LoginCtrl', function($scope, $rootScope, $firebase, $firebaseSimpleLogin, $location, $ionicPopup, Users) {
    $scope.$root.cls = 'bar-calm';
    var ref = new Firebase('https://socialthoughts.firebaseio.com/');
    var users = Users.all();
    $rootScope.user = {};
    $rootScope.auth = $firebaseSimpleLogin(ref);


    $rootScope.$on("$firebaseSimpleLogin:login", function(e, user) {
        $rootScope.user = user;
        $location.path('home/tab/dashboard');
    });
    
    $rootScope.$on("$firebaseSimpleLogin:logout", function(e, user) {
        console.log('Logged Out');
    });

    $scope.createNewUser = function(newUser) {
        $rootScope.auth.$createUser(newUser.email, newUser.password, function(error, user) {
            if (!error) {
                console.log('User Id: ' + user.uid + ', Email: ' + user.email);
            } else {
                console.log(error);
            }
        });
        Users.push({
            email: newUser.email,
            username: newUser.username/*,
             id: auth.id*/
        });

        newUser.username = "";
        newUser.email = "";
        newUser.password = "";
        //$location.path('home/dashboard');
    };

    $scope.login = function(user) {
        $rootScope.auth.$login('password', {
            email: user.email,
            password: user.password
        });
        user.email = "";
        user.password = "";
    };
})
