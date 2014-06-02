/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('ThoughtsCtrl', function($scope, $firebase, $ionicModal) {
    var thoughtsRef = new Firebase('https://socialthoughts.firebaseio.com/thoughts');
    $scope.thoughts = $firebase(thoughtsRef);
    
    
    $scope.createNewThought = function(thought) {
        $scope.thoughts.$add({
            text: thought.text,
            userId: 0,
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

});