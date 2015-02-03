(function() {

	var app = angular.module("phoneBook",[ ]);

	app.directive("contactAdder",function(){
		return{
			restrict: "E",
			templateUrl: "people-adder.html",
			controllerAs: "adder",
			controller: function($scope){
				this.add=function(contactsCtrl){
					contactsCtrl.push({"name":this.name,"email":this.email})
					//window.console.log(contactsCtrl);
					this.name="";this.email="";
				};
			}
		};
	});

	app.directive("contacts",["$http", function($http){
		return {
			restrict: "E",
			templateUrl: "people-list.html",
			controllerAs: "contacts",			
			controller: function($scope) {
				$scope.contacts=[];
				$scope.limiter = 7;	
				$scope.http="";			
				$scope.fetcher=function($scope)
				{
					$http.get("/jsons/contacts.json").success(function(data){
						$scope.contacts=data.contacts;
					});
				},
				$scope.fetcher($scope);
			},
		}
	}]);
})()