/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('LoginCtrl', function($scope, $firebase, $location) {
    var usersRef = new Firebase('https://socialthoughts.firebaseio.com/users');
    var users = $firebase(usersRef);
    var auth = new FirebaseSimpleLogin(usersRef, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
        } else if (user) {
            // user authenticated with Firebase
            $location.path('home/dashboard');
            console.log('User ID: ' + user.uid + ', Provider: ' + user.provider);
        } else {
            // user is logged out
            console.log('logged out');
        }
    });

    $scope.createNewUser = function(newUser) {
        auth.createUser(newUser.email, newUser.password, function(error, user) {
            if (!error) {
                console.log('User Id: ' + user.uid + ', Email: ' + user.email);
            } else {
                console.log(error);
            }
        });
        users.$add({
            email: auth.email,
            username: newUser.username,
	    id: auth.id
        });

        newUser.username = "";
        newUser.email = "";
        newUser.password = "";
	$location.path('home/dashboard');
    };

    $scope.login = function(user) {
        auth.login('password', {
            email: user.email,
            password: user.password
        });
        user.email = "";
        user.password = "";
    };
})
