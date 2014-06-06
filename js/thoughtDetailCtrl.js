/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('ThoughtDetailCtrl', function($scope, $rootScope, $stateParams,
Thoughts, Users, Comments, Favorites){
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
            date: new Date().toISOString()
        });
        newComment.text = '';
        $scope.comments = Comments.getThoughtComments($stateParams.thoughtId);
    };
    
    $scope.returnDate = function(dateString){
        return new Date(dateString).toLocaleDateString();
    };
    
    $scope.returnTime = function(dateString){
        return new Date(dateString).toLocaleTimeString();
    };
    
    $scope.countFavorites = function(thoughtId){
        return Favorites.getThoughtFavorites(thoughtId).length;
    };
})