(function() {

	var app = angular.module("phoneBook",['ngRoute']);
	app.controller('contactsCtrl', ['contactsService','$scope', function(contactsService,$scope){

		// initializations
		this.newguy={name:"",email:""};
		this.limiter=12;
		this.list=[];
		this.loading=false;
		this.contactsService=contactsService;
		var that = this;
		this.fetcher=function()
		{
			that.loading=true;
			return this.contactsService.getList().then(function(newlist){
				that.list=newlist.contacts;
				that.loading=false;
			});
		};
		this.adder=function(contact)
		{
			this.list.push(contact);
			contactsService.submitter(this.newguy);
		};
		this.newGuyCleaner=function()
		{
			this.newguy={};
		}
		this.fetcher();
		window.console.log(this.list);
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
