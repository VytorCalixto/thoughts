/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('MenuCtrl',function($scope, $firebase, $location){
    var ref = new Firebase('https://socialthoughts.firebaseio.com/');
    var auth = new FirebaseSimpleLogin(ref, function(error, user) {
        if (error) {
            // an error occurred while attempting login
            console.log(error);
        } else if (user) {
            // user authenticated with Firebase
        } else {
            // user is logged out
            console.log('logged out');
            $location.path('/signup');
        }
    });
    
    $scope.logout = function(){
        auth.logout();
	$location.path('/signup');
    };
})
