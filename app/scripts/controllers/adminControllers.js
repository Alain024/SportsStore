angular.module("sportsStoreAdmin")
  .constant("authUrl", "http://localhost:2403/users/login")
  .controller("authUrl", function($scope, $http, $location, authUrl) {

    $scope.authenticate = function(user, pass) {
      $http.post(authUrl, {
        username: user,
        password: pass
      }, {
        withCredentials: true
      }).success(function(data) {
        $location.path("/main");
      }).error(function(error) {
        $scope.authenticationError = error;
      });
    }
  });