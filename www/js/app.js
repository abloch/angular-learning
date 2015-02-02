(function() {

	var app = angular.module("angulearn",[]);
	app.controller('MyController', function($scope) {
		$scope.people=[
			{name:"Akiva"},
			{name:"Justin"},
			{name:"Uzi"},
			{name:"Yona"},
		];
		$scope.limiter = 3;
	})
})()