angular.module('techStoryReaderApp')
.factory('redditService', function($http){
  var redditUrl = 'http://www.reddit.com/r/';

  var formatData = function(data){
    var results = [];
    for(var i = 0; i < data.length; i++){
      results.push({
        title: data[i].data.title,
        url: data[i].data.url,
        score: data[i].data.score,
        commentUrl: 'http://www.reddit.com' + data[i].data.permalink
      });
    }
    return results;
  };

  var service = {
    getData: function(subreddit){
      return $http.get(redditUrl + subreddit + '.json').then(function(data){
        var subredditData = data.data.data.children;
        subredditData.shift();
        subredditData = formatData(subredditData);
        return subredditData;
      }, function(err){
        console.log('We have an error',err);
      });
    }
  };
  return service;
});