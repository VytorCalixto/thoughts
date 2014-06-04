stApp.factory('Users', function($firebase){
	var users = $firebase(new Firebase('https://socialthoughts.firebaseio.com/users'));

	return{
		get: function(){
			return users;
		},
		getUserByEmail: function(email){
			for(var key in users){
				if(users[key].email===email){
					return users[key];
				}
			}
		},
		push: function(user){
			users.$add(user);
		}
	}
})