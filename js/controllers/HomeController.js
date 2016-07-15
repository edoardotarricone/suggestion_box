app.controller('HomeController', [
'$scope',
'suggestions',
 
function($scope, suggestions) {
	$scope.posts = suggestions.posts;
	$scope.addSuggestion = function() {

            // If input empty, don't submit. This is bound with ng-model
            if (!$scope.title || $scope.title === "") {
                return;
            }

            // Push suggestion posts in suggestions.js service
            $scope.posts.push({
                title: $scope.title,
                upvotes: 0,
                comments: [],
                id: $scope.posts.length
            });

            // After pushing the data to the service, clear input
            $scope.title = '';
        };
    $scope.upVote = function(post) {
    	post.upvotes += 1;
    };
}]);
