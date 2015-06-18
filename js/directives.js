angular.module('techStoryReaderApp')
.directive('sorter', function(){
  return {
    restrict: 'E',
    template: '<button ng-click="sort();" class="sort">Sort</button>',
    link: function(scope, element, attrs){
      scope.sort = function(){
        scope.predicate = scope.predicate === 'score' ? '-score' : 'score';
      };
    }
  };
});