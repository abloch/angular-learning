(function() {

	var app = angular.module("phoneBook",[ ]);

	app.directive("contactAdder",function(){
		return{
			restrict: "E",
			templateUrl: "people-adder.html",
			controllerAs: "adder",
			controller: function($scope){
				this.submitter=function(){
					// todo : add an http put
				};
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
				$scope.list=[];
				$scope.limiter = 7;	
				$scope.fetcher=function()
				{
					$http.get("/api/contacts.php").success(function(data){
						window.console.log(data);
						$scope.list=data;
					});
				},
				$scope.fetcher();
			},
		}
	}]);
})()
