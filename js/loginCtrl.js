/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('LoginCtrl', function($scope, $rootScope, $firebase, $location, $ionicPopup) {
    $scope.$root.cls='bar-calm';
    var usersRef = new Firebase('https://socialthoughts.firebaseio.com/users');
    var users = $firebase(usersRef);
    $rootScope.user = {};
    $rootScope.auth = new FirebaseSimpleLogin(usersRef, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
        } else if (user) {
            // user authenticated with Firebase
            console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
            $rootScope.user = user;
            $location.path('home/tab/dashboard');
        } else {
            // user is logged out
            console.log('logged out');
        }
    });

    $scope.createNewUser = function(newUser) {
        $rootScope.auth.createUser(newUser.email, newUser.password, function(error, user) {
            if (!error) {
                console.log('User Id: ' + user.uid + ', Email: ' + user.email);
            } else {
                console.log(error);
            }
        });
        users.$add({
            email: newUser.email,
            username: newUser.username/*,
             id: auth.id*/
        });

        newUser.username = "";
        newUser.email = "";
        newUser.password = "";
        $location.path('home/dashboard');
    };

    $scope.login = function(user) {
        $rootScope.auth.login('password', {
            email: user.email,
            password: user.password
        });
        $location.path('home/tab/dashboard')
        user.email = "";
        user.password = "";
    };
})
