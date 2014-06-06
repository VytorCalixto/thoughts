/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('FavoriteThoughtsCtrl', function($stateParams, $scope, $rootScope, Thoughts, Favorites, Users) {
    $scope.user = Users.getUserByEmail($stateParams.userEmail);
    
    var getUserFavoritesThoughts = function(){
       var usrFavorites = Favorites.getUserFavorites($stateParams.userEmail);
       var favsThoughts = [];
       for (var i in usrFavorites){
           var thgId = usrFavorites[i].thoughtId;
           var thg = Thoughts.get(thgId);
           thg.$id = thgId;
           favsThoughts.push(thg);
       }
       return favsThoughts;
    };
    
    $scope.favoritesThoughts = getUserFavoritesThoughts();
})