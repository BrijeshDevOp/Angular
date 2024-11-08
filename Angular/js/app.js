var app = angular.module('myApp',[]);

app.controller('myController',['$scope',function($scope){
    $scope.name='brijesh';
    $scope.age=22;
    $scope.fullname = function(){
        return $scope.name+"|"+$scope.age;
    };
    $scope.isSpy=true;
    $scope.codename="XYZ";
}]);

app.controller("myData",['$scope',function($scope){
    $scope.form={};
    $scope.submit=function(){
        $scope.data.push($scope.form);
        $scope.form={};
    };
    $scope.data = [
        {
            name:'Brijesh',
            age:22,
            salary:50000,
            email:'bbb@gmail.com',
        },
        {
            name:'Suhas',
            age:22,
            salary:40000,
            email:'cc@gmail.com',
        },
        {
            name:'Kushal',
            age:24,
            salary:60000,
            email:'xxx@yahoo.com'
        },
    ];
}]);

app.controller("event",['$scope',function($scope){
    $scope.number=0;
    $scope.view=true;
    $scope.toggle=function(){
        $scope.view=!$scope.view;
    };
}]);

app.directive('myTag',function(){
    return{
        restrict:'E',
        templateUrl:'widget.html'
    };
});