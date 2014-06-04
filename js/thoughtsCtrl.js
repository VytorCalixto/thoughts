/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('ThoughtsCtrl', function($scope, $rootScope, $firebase, $ionicModal, $firebaseSimpleLogin, Users, Thoughts) {
    $scope.$root.cls='bar-logged';
    $scope.thoughts = Thoughts.get();
    $scope.users = Users.get();
    $scope.myThoughts = Thoughts.getUserThoughts($rootScope.user.email);
    

    $scope.getUserByEmail = function(userEmail){
        Users.getUserByEmail(userEmail);
    };
    
    $scope.createNewThought = function(thought) {
        Thoughts.push({
            text: thought.text,
            userEmail: $rootScope.user.email,
            data: new Date().toLocaleDateString(),
            hora: new Date().toLocaleTimeString()
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
    
    $scope.comments = function(thoughtId){
        return 0;
    };
})