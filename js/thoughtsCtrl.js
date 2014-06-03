/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('ThoughtsCtrl', function($scope, $firebase, $ionicModal, $firebaseSimpleLogin) {
    $scope.thoughts = $firebase(new Firebase('https://socialthoughts.firebaseio.com/thoughts'));
    $scope.users = $firebase(new Firebase('https://socialthoughts.firebaseio.com/users'));
    
    $scope.getUserById = function(userId){
        for(var i in $scope.users){
            if($scope.users[i].id===userId){
                return $scope.users[i].username;
            }
        }
    };
    
    $scope.createNewThought = function(thought) {
        $scope.thoughts.$add({
            text: thought.text,
            userId: 6,
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
        console.log(text);
    };

})