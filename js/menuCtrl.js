/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('MenuCtrl',function($scope, $rootScope, $firebase, $location){
    var ref = new Firebase('https://socialthoughts.firebaseio.com/');

    $scope.logout = function(){
        $rootScope.auth.$logout();
	$location.path('/signup');
    };
})
