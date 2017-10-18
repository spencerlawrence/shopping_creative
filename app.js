var app = angular.module("myShoppingList", []); 

app.controller("myCtrl", function($scope) {
    $scope.products = [{name:'Milk', cat:'Dairy'}];
    $scope.addItem = function () {
      $scope.products.push({name:$scope.newItem,cat:$scope.category});
    }
    $scope.removeItem = function(x) {
      $scope.products.splice(x, 1);
    }
});
