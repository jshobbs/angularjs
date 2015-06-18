angular.module('techStoryReaderApp')

.controller('homeController', function($scope){
})

.controller('javaController', function($scope, redditService){
  $scope.title = 'Java';
  redditService.getData('java').then(function(data){
    $scope.stories = data;
  });
})

.controller('javaScriptController', function($scope, redditService){
  $scope.title = 'JavaScript';
  redditService.getData('javascript').then(function(data){
    $scope.stories = data;
  });
})

.controller('angularJSController', function($scope, redditService){
  $scope.title = 'AngularJS';
  redditService.getData('AngularJS').then(function(data){
    $scope.stories = data;
  });
})

.controller('bootstrapController', function($scope, redditService){
  $scope.title = 'Bootstrap';
  redditService.getData('bootstrap').then(function(data){
    $scope.stories = data;
  });
})

.controller('cssController', function($scope, redditService){
  $scope.title = 'CSS';
  redditService.getData('css').then(function(data){
    $scope.stories = data;
  });
});