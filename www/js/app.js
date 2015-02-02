(function() {

	var app = angular.module("angulearn",[]);
	app.controller('PeopleCtrl', function($scope) {
		$scope.people=[
			{name:"Akiva"},
			{name:"Justin"},
			{name:"Uzi"},
			{name:"Yona"},
		];
		$scope.limiter = 3;
	});

	app.controller("PeopleAdderCtrl",function() {
		this.name="";
		this.submitter=function(people){
			people.push({"name":this.name});
		};
	})
})()