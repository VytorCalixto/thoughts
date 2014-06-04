stApp.controller('AccountCtrl', function($rootScope, $scope, $firebase, Users){
	var users = Users.all();
	$scope.user = Users.getUserByEmail($rootScope.user.email);

})