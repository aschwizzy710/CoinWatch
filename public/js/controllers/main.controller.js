(function() {
  angular.module('CoinWatch')
        .controller('MainController', MainController);

  MainController.$inject = ['$scope', 'CoinSummaryService'];

  function MainController($scope, CoinSummaryService){
    $scope.coins = CoinSummaryService.get();
    $scope.searchCoins = searchCoins;
    $scope.$watch(function(){
      return CoinSummaryService.get();
    }, function(){
        $scope.coins = CoinSummaryService.get();
      });

      function searchCoins(coinName){
        var coin = _.find($scope.coins, function(o){
        return o.name.toUpperCase() === coinName.toUpperCase();
      });
      console.log(coin);
    }
    console.log(searchCoins());
  }



}());
