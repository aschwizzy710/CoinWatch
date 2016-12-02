(function() {
  angular.module('CoinWatch')
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'CoinSummaryService'];

  function MainController($scope, CoinSummaryService){
    $scope.coins = CoinSummaryService.get();

    $scope.$watch(function(){
      return CoinSummaryService.get();
    }, function(){
        $scope.coins = CoinSummaryService.get();
      });
  }

    _.find(coins, function(o){
      return o.name === "Bitcoin";
    });

}());
