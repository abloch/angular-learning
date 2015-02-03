(function() {

	var initialContacts=[
		{name:"Akiva",email:"akiva@gmail.com"},
		{name:"Justin",email:"justin@gmail.com"},
		{name:"Uzi",email:"uzi@gmail.com"},
		{name:"Yona",email:"yona@gmail.com"},
	];

	var app = angular.module("phoneBook",[]);
	app.controller('ContactsCtrl', function($scope) {
		$scope.contacts=initialContacts;
		$scope.limiter = 7;
	});

	app.controller("ContactAdderCtrl", function($scope){
		this.add=function(contactsCtrl){
			contactsCtrl.push({"name":this.name,"email":this.email})
			//window.console.log(contactsCtrl);
			this.name="";this.email="";
		};
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