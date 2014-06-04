stApp.factory('Users', function($firebase){
	var users = $firebase(new Firebase('https://socialthoughts.firebaseio.com/users'));

	return{
                all: function(){
                    return users;
                },
		get: function(key){
			return users[key];
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