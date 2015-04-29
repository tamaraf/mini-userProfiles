var app = angular.module('userProfiles');

app.controller('mainController', function($scope, mainService){
	
	var getUsers = function() {
		$scope.users = mainService.getUsers();
	}

	getUsers();
});