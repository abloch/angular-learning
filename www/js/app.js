(function() {

	var app = angular.module("phoneBook",[ 'ngRoute']);
	app.controller('contactsCtrl', ['$http','$scope', function($http,$scope){
		this.submitter=function(){
			$http.post("/api/contacts.php",{"name":this.name,"email":this.email});
		};
		this.adder=function(){
			this.list.push({"name":this.name,"email":this.email})
		};
		this.fetcher=function()
		{
			$http.get("/api/contacts.php").success(function(data){
				$scope.contacts.list=data;
			});			
		};
		this.cleaner=function()
		{
			this.name="";this.email="";
		}
		this.logger=function(thing)
		{
			window.console.log(thing);
		}

		// initializations
		this.list=[];
		this.limiter = 12;	
		this.fetcher();
		this.name="daniel";this.email="daniel@gmail.com";		
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
})()
