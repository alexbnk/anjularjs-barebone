// var app=angular.module('myApp', ['ui.router']);

app.controller('AuthCtrl', ['$scope', function($scope, $state,$stateProvider, globalFactory) {


  this.appName ="Brand";
  this.homestate = 'home';
  this.menuItems = [

          {
              ENmenu: 'Sushi',
              ENmenustate: 'sushi'
          },
          {
              ENmenu: 'Meat',
              ENmenustate: 'meat'
          },
          {
              ENmenu: 'Cars',
              ENmenustate: 'cars'
          },

      ];

  this.currentUser = {
    name: 'user',
    email: 'user@domain.com',
    role: 'admin',
    org: 1001
}

}])
.directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/shared/navbar/navbar.html',
    // template:'<h1> navbar</h1>'
  };
});
