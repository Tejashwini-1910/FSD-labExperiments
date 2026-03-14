var app = angular.module("studentApp",[]);

app.controller("StudentController",function($scope,$http){

$scope.students=[];
$scope.newStudent={};

// fetch students
$scope.fetchStudents=function(){

$http.get("http://localhost:3000/api/students")
.then(function(res){

$scope.students=res.data;

});

};

// add student
$scope.addStudent=function(){

$http.post("http://localhost:3000/api/students",$scope.newStudent)
.then(function(res){

$scope.students.push(res.data);
$scope.newStudent={};

});

};

// delete student
$scope.deleteStudent=function(id){

$http.delete("http://localhost:3000/api/students/"+id)
.then(function(){

$scope.fetchStudents();

});

};

$scope.fetchStudents();

});