(function() {

	var initialContacts=[
		{name:"Akiva"},
		{name:"Justin"},
		{name:"Uzi"},
		{name:"Yona"},
	];

	var app = angular.module("phoneBook",[]);
	app.controller('ContactsCtrl', function($scope) {
		$scope.contacts=initialContacts;
		$scope.limiter = 3;
	});

	app.controller("ContactAdderCtrl", function($scope){
		this.add=function(contactsCtrl){
			contactsCtrl.push({"name":this.name})
			//window.console.log(contactsCtrl);
			this.name="";
		};
		this.name="ha";
	});

	app.directive("contactAdder",function(){
		return{
			restrict: "E",
			templateUrl: "people-adder.html",
		};
	});

	app.directive("contacts",function(){
		return {
			restrict: "E",
			templateUrl: "people-list.html",
		}
	});
})()