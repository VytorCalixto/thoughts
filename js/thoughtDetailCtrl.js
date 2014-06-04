/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('ThoughtDetailCtrl', function($scope, $stateParams, Thoughts, Users){
    $scope.thought = Thoughts.get($stateParams.thoughtId);
    
    $scope.getUserByEmail = function(email){
        return Users.getUserByEmail(email).username;
    };
    
    $scope.comments = function(){
        return 0;
    };
})