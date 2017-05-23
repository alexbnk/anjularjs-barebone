var app=angular.module('myApp', ['ui.router'])



app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {


   $urlRouterProvider.otherwise('/home');

   $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
          url:'/home',
          templateUrl: 'app/components/home/home.component.html'
        })
        .state('sushi', {
            url: '/sushi/:param',
            templateUrl: 'app/components/sushi/sushi.component.html',
            //controller : 'itemsController'
            // resolve: {
            //     garageFactory: 'garageFactory',
            //     items: function(garageFactory) {
            //         return garageFactory.getCars();
            //     }
            // },
            // controller: 'tasksController'
        })








        .state('item2', {
            url: '/item2',
            templateUrl: 'app/components/item2/item2.component.html',
            controller : 'item2Controller'
        })
      })
