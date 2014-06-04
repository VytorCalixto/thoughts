stApp.controller('AccountCtrl', function($rootScope, $scope, $firebase, Users){
	var users = Users.get();
	$scope.user = Users.getUserByEmail($rootScope.user.email);

})