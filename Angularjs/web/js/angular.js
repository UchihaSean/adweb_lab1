/**
 * Created by Jly_wave on 5/6/16.
 */
var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'季灵阳', done:false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});