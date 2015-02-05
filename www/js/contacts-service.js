var app=angular.module("phoneBook");

app.factory('contactsService',["$http",function($http){
	var contactsInstance={};
	var list=[];

	contactsInstance.submitter=function(contact){
		$http.post("/api/contacts.php",contact);
	};
	contactsInstance.adder=function(contact){
		list.push(contact);
	};
	contactsInstance.fetcher=function()
	{
		$http.get("/api/contacts.php").success(function(data){
			list=data;
		});			
	};

	contactsInstance.getList=function(){
		window.console.log(list);
		return list;
	}
	contactsInstance.fetcher();
	window.console.log("init ctctsSrv");
	return contactsInstance;
}]);