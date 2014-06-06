/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.factory('Favorites', function($firebase) {
    var favorites = $firebase(new Firebase('https://socialthoughts.firebaseio.com/favorites'));

    return{
        all: function() {
            return favorites;
        },
        get: function(key) {
            return favorites[key];
        },
        getKeyByThoughtAndEmail: function(thoughtId, userEmail) {
            for (var key in favorites) {
                if (favorites[key] !== null){
                    if ((favorites[key].thoughtId === thoughtId) && 
                            (favorites[key].userEmail === userEmail)){
                        return key;
                    }
                }
            }
        },
        getThoughtFavorites: function(thoughtId) {
            var thgFavorites = [];
            for (var key in favorites) {
                if (favorites[key] !== null) {
                    if (favorites[key].thoughtId === thoughtId) {
                        thgFavorites.push(favorites[key]);
                    }
                }
            }
            return thgFavorites;
        },
        getUserFavorites: function(userEmail) {
            var usrFavorites = [];
            for (var key in favorites) {
                if (favorites[key] !== null) {
                    if (favorites[key].userEmail === userEmail) {
                        usrFavorites.push(favorites[key]);
                    }
                }
            }
            return usrFavorites;
        },
        getIfUserFavoritedThought: function(thoughtId, userEmail) {
            var thgFavorites = this.getThoughtFavorites(thoughtId);
            for (var key in thgFavorites) {
                if (thgFavorites[key].userEmail === userEmail) {
                    return true;
                }
            }
            return false;
        },
        push: function(favorite) {
            favorites.$add(favorite);
        },
        remove: function(thoughtId, userEmail) {
            favorites.$remove(this.getKeyByThoughtAndEmail(thoughtId, userEmail));
        }
    };
});