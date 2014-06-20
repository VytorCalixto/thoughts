/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('ThoughtItemButtonCtrl', function($scope, $rootScope, Users,
        $location, Comments, Favorites, $ionicModal, $ionicScrollDelegate) {
    $scope.path = $location.absUrl();
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

    $scope.isFavoritedThought = function(thoughtId) {
        return Favorites.getIfUserFavoritedThought(thoughtId, $rootScope.user.email);
    };

    $scope.countFavorites = function(thoughtId) {
        return Favorites.getThoughtFavorites(thoughtId).length;
    };

    $scope.favorite = function(thoughtId) {
        Favorites.push({
            thoughtId: thoughtId,
            userEmail: $rootScope.user.email,
            date: new Date().toISOString()
        });
        $scope.getIfUserFavoritedThought(thoughtId);
    };

    $scope.unfavorite = function(thoughtId) {
        Favorites.remove(thoughtId, $rootScope.user.email);
    };

    $ionicModal.fromTemplateUrl('thought-detail.html', function(modal) {
        $scope.thoughtDetailModal = modal;
    }, {
        scope: $scope,
        animation: 'slide-in-up'
    });

    $scope.openThoughtDetail = function(id) {
        $scope.thoughtDetailModal.show();
    };

    $scope.closeThoughtDetail = function() {
        $scope.thoughtDetailModal.hide();
    };

    $scope.$on('modal.shown', function() {
        $scope.comments = Comments.getThoughtComments($scope.thought.$id);
    });
    
    $scope.addComment = function(newComment) {
        Comments.push({
            text: newComment.text,
            thoughtId: $scope.thought.$id,
            userEmail: $rootScope.user.email,
            date: new Date().toISOString()
        });
        newComment.text = '';
        $scope.comments = Comments.getThoughtComments($scope.thought.$id);
        $ionicScrollDelegate.$getByHandle('modalScroll').scrollBottom(true);
    };
})