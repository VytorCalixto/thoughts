/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('ThoughtItemButtonCtrl', function($scope, $rootScope, Users, Comments, Favorites) {

    $scope.getUserByEmail = function(email) {
        var user = Users.getUserByEmail(email);
        return user.username;
    };

    $scope.returnDate = function(dateString) {
        return new Date(dateString).toLocaleDateString();
    };

    $scope.returnTime = function(dateString) {
        return new Date(dateString).toLocaleTimeString();
    };
    
    $scope.countComments = function(thoughtId) {
        return Comments.getThoughtComments(thoughtId).length;
    };
    
    $scope.getIfUserFavoritedThought = function(thoughtId){
        return Favorites.getIfUserFavoritedThought(thoughtId, $rootScope.user.email);
    };
    
    $scope.countFavorites = function(thoughtId){
        return Favorites.getThoughtFavorites(thoughtId).length;
    };
    
    $scope.favorite= function(thoughtId){
        Favorites.push({
            thoughtId: thoughtId,
            userEmail: $rootScope.user.email,
            date: new Date().toISOString()
        });
        $scope.getIfUserFavoritedThought(thoughtId);
    };
    
    $scope.unfavorite= function(thoughtId){
        Favorites.remove(thoughtId, $rootScope.user.email);
    };
})