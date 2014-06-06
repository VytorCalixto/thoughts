/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('ThoughtsCtrl', function($scope, $rootScope, $firebase,
        $ionicModal, $location, Users, Thoughts, Comments, Favorites) {
    $scope.$root.cls = 'bar-logged';
    $scope.thoughts = Thoughts.all();
    $scope.users = Users.all();
    $scope.myThoughts = Thoughts.getUserThoughts($rootScope.user.email);
    $scope.path = $location.absUrl();


    $scope.getUserByEmail = function(email) {
        var user = Users.getUserByEmail(email);
        return user.username;
    };
    
    $scope.returnDate = function(dateString){
        return new Date(dateString).toLocaleDateString();
    };
    
    $scope.returnTime = function(dateString){
        return new Date(dateString).toLocaleTimeString();
    };
    
    $scope.createNewThought = function(thought) {
        Thoughts.push({
            text: thought.text,
            userEmail: $rootScope.user.email,
            date: new Date().toISOString()
        });
        thought.text = '';
        $scope.thoughtModal.hide();
    };

    $ionicModal.fromTemplateUrl('new-thought.html', function(modal) {
        $scope.thoughtModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.newThought = function() {
        $scope.thoughtModal.show();
    };

    $scope.closeNewThought = function(text) {
        $scope.thoughtModal.hide();
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