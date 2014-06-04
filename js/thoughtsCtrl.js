/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
stApp.controller('ThoughtsCtrl', function($scope, $rootScope, $firebase, $ionicModal, $firebaseSimpleLogin) {
    $scope.$root.cls='bar-logged';
    $scope.thoughts = $firebase(new Firebase('https://socialthoughts.firebaseio.com/thoughts'));
    $scope.users = $firebase(new Firebase('https://socialthoughts.firebaseio.com/users'));
    $scope.myThoughts = getMyThoughts();

    var getMyThoughts = function(){
        var myThoughts = [];
        for(var key in $scope.thoughts){
            if($scope.thoughts[key].userEmail===$rootScope.user.email){
                myThoughts.push($scope.thoughts[key]);
            }
        }
    };
    
    $scope.getUserByEmail = function(userEmail){
        for(var i in $scope.users){
            if($scope.users[i].email===userEmail){
                return $scope.users[i].username;
            }
        }
    };
    
    $scope.createNewThought = function(thought) {
        $scope.thoughts.$add({
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