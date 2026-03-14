var app = angular.module('employeeApp', []);

app.controller('EmployeeController', function($scope, $http) {

    $scope.employees = [];
    $scope.statusMessage = "Fetching data...";

    $http.get("employees.json")
    .then(function(response){

        $scope.employees = response.data;
        $scope.statusMessage = "Data loaded successfully";

    })
    .catch(function(error){

        console.log("Error fetching data", error);
        $scope.statusMessage = "Error loading data";

    });

});