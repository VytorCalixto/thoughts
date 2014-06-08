stApp.controller('AccountCtrl', function($rootScope, $scope, $location, $stateParams, Users, Thoughts) {
    var users = Users.all();

    if($stateParams.userEmail === undefined){
        $scope.user = Users.getUserByEmail($rootScope.user.email);
    }else{
        $scope.user = Users.getUserByEmail($stateParams.userEmail);
    }
    $scope.userThoughts = Thoughts.getUserThoughts($scope.user.email);
    $scope.path = $location.absUrl();
    $scope.userAccountPath = $location.absUrl();

})