stApp.factory('Thoughts', function($firebase){
	var thoughts = $firebase(new Firebase('https://socialthoughts.firebaseio.com/thoughts'));

	return{
                all: function(){
                    return thoughts;
                },
		get: function(key){
			return thoughts[key];
		},
		getUserThoughts: function(email){
			var userThoughts = [];
			for(var key in thoughts){
				if(thoughts[key].userEmail===email){
					userThoughts.push(thoughts[key]);
				}
			}
			return userThoughts;
		},
		push: function(thought){
			thoughts.$add(thought);
		}
	}
})