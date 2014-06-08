stApp.controller('AccountCtrl', function($rootScope, $scope, $location, $stateParams, Users, Thoughts) {
    var users = Users.all();

    if($stateParams.userEmail === undefined){
        $scope.user = Users.getUserByEmail($rootScope.user.email);
        $scope.ifLinkedHere = false;
    }else{
        $scope.user = Users.getUserByEmail($stateParams.userEmail);
        $scope.ifLinkedHere = true;
    }
    $scope.userThoughts = Thoughts.getUserThoughts($scope.user.email);
    $scope.userAccountPath = $location.absUrl();

})