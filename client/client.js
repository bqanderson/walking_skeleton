angular.module('app', []);

angular.module('app').controller('IndexController', ['$scope', '$http', function($scope, $http){
  $scope.cat = {};
  $scope.cats = [];
  function fetchCats() {
    return $http.get('/cats').then(function(response){
      if(response.status !== 200){
        throw new Error('Failed to fetch cats from the API');
      }
      $scope.cat = {};
      $scope.cats = response.data;
      return response.data;
      console.log(response.data);
    })
  };
  $scope.add = function(cat){
    return $http.post('/add', cat).then(fetchCats);
  };
  fetchCats();
}])
