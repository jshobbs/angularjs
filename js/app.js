angular.module('techStoryReaderApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: 'home.html',
      controller: 'homeController'
    })
    .state('java',{
      url: '/java',
      templateUrl: 'feedView.html',
      controller: 'javaController'
    })
    .state('javascript',{
      url: '/javascript',
      templateUrl: 'feedView.html',
      controller: 'javaScriptController'
    })
    .state('angularjs',{
      url: '/angularjs',
      templateUrl: 'feedView.html',
      controller: 'angularJSController'
    })
    .state('bootstrap',{
      url: '/bootstrap',
      templateUrl: 'feedView.html',
      controller: 'bootstrapController'
    })
    .state('css',{
      url: '/css',
      templateUrl: 'feedView.html',
      controller: 'cssController'
    });
});