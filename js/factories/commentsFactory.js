/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.factory('Comments', function($firebase) {
    var comments = $firebase(new Firebase('https://socialthoughts.firebaseio.com/comments'));

    return{
        all: function() {
            return comments;
        },
        get: function(key) {
            return comments[key];
        },
        getThoughtComments: function(thoughtKey) {
            var thComments = [];
            for (var key in comments) {
                if(comments[key] !== null){
                    if (comments[key].thoughtId === thoughtKey) {
                        thComments.push(comments[key]);
                    }
                }
            }
            return thComments;
        },
        push: function(comment) {
            comments.$add(comment);
        }
    };
})