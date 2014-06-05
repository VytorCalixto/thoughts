/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('ThoughtDetailCtrl', function($scope, $rootScope, $stateParams, Thoughts, Users, Comments){
    $scope.thought = Thoughts.get($stateParams.thoughtId);
    $scope.comments = Comments.getThoughtComments($stateParams.thoughtId);
    
    $scope.getUserByEmail = function(email){
        return Users.getUserByEmail(email).username;
    };
    
    $scope.countComments = function(thoughtId) {
        return Comments.getThoughtComments(thoughtId).length;
    };
    
    $scope.addComment = function(newComment){
        Comments.push({
            text: newComment.text,
            thoughtId: $stateParams.thoughtId,
            userEmail: $rootScope.user.email,
            data: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        });
        newComment.text = '';
        $scope.comments = Comments.getThoughtComments($stateParams.thoughtId);
    };
})