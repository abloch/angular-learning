var app=angular.module("phoneBook");

app.factory('contactsService',["$http","$q",function($http,$q){
	var contactsInstance={};

	contactsInstance.submitter=function(contact){
		$http.post("/api/contacts.php",contact);
	};
	contactsInstance.fetcher=function()
	{
		var deferred = $q.defer();
		$http.get("/api/contacts.php")
		.success(function(data){
			deferred.resolve({contacts:data});
		}).error(function(msg,code){
			window.console.log(msg);
			deferred.reject(msg);
		})
		return deferred.promise;
	};

	contactsInstance.getList=function(){		
		return contactsInstance.fetcher().then(function (newlist){return newlist;});
	}
	return contactsInstance;
}]);