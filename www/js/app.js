(function() {

	var app = angular.module("angulearn",[]);
	app.controller('PeopleCtrl', function($scope) {
		$scope.people=[
			{name:"Akiva"},
			{name:"Justin"},
			{name:"Uzi"},
			{name:"Yona"},
		];
		$scope.limiter = 8;
	});

	app.controller("PeopleAdderCtrl",function() {
		this.name="";
		this.submitter=function(people){
			people.push({"name":this.name});
			this.name="";
		};
	})
})()