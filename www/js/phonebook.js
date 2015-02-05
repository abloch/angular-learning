(function() {

	var app = angular.module("phoneBook",['ngRoute']);
	app.controller('contactsCtrl', ['contactsService','$scope', function(contactsService,$scope){

		// initializations
		this.name="";this.email="";
		this.limiter=12;		
		window.console.log("init CtctsCtrl");
		this.contactsService=contactsService;
		this.fetcher=function()
		{
			this.list=this.contactsService.getList();
		}
		this.fetcher();
	}])

	app.directive("contactAdder",function(){
		return{
				restrict: "E",
				templateUrl: "people-adder.html",
			};
		});	

	app.directive("contacts",function($http){
		return {
				restrict: "E",
				templateUrl: "people-list.html",
			};		
	});

	app.config(function($routeProvider){
		$routeProvider.when("/",{
			templateUrl: "contacts-list.html",
		}).when("/contact/:id",{
			templateUrl: "single-contact.html",
		})
	})
})()
