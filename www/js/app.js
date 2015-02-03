(function() {

	var initialContacts=[
		{name:"Akiva"},
		{name:"Justin"},
		{name:"Uzi"},
		{name:"Yona"},
	];

	var app = angular.module("phoneBook",[]);
	app.controller('PeopleCtrl', function($scope) {
		$scope.people=initialContacts;
		$scope.limiter = 8;
	});

	app.controller("PeopleAdderCtrl",peopleAdderController);

	function peopleAdderController() {
		this.name="";
		this.submitter=function(people){
			people.push({"name":this.name});
			this.name="";
		};
	};

	app.directive("peopleAdder",function(){
		return{
			restrict: "E",
			templateUrl: "people-adder.html",
		};
	});

	app.directive("peopleList",function(){
		return {
			restrict: "E",
			templateUrl: "people-list.html",
		}
	});
})()