(function() {

	var app = angular.module("phoneBook",[ ]);
	app.controller('contactsCtrl', ['$http','$scope', function($http,$scope){
		this.submitter=function(){
			$http.post("/api/contacts.php",this);
		};
		this.adder=function(){
			window.console.log(this.list);
			this.list.push({"name":this.name,"email":this.email})
			window.console.log(this.list);
			this.name="";this.email="";
		};
		this.fetcher=function()
		{
			$http.get("/api/contacts.php").success(function(data){
				window.console.log(data);
				window.console.log($scope.contacts.list);
				$scope.contacts.list=data;
				window.console.log($scope.contacts.list);				
			});			
		};

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
