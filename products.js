var app = angular.module('products', []);
app.controller("TabController", function($scope) {
  $scope.selectedTab = 1;
  $scope.setTab = function(tabIndex) {
    $scope.selectedTab = tabIndex;
  };
});
