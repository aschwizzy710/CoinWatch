(function() {
  angular.module('CoinWatch')
        .factory('CoinSummaryService', CoinSummaryService);

  CoinSummaryService.$inject = ['$http'];

  function CoinSummaryService($http){
    init();
    var coins = [];
    return {
      get: getAllCoins,
      // create: createSavedCoin,
      // delete: deleteSavedCoin
    };

    function init(){
      $http.get('https://api.coinmarketcap.com/v1/ticker/')
            .then(function(response){
              coins = response.data;
            })
            .catch(function(err){
              console.log(err);
            });
    }
    function getAllCoins(){
      return coins;
    }
    function createSavedCoin(coin){
      $http.post('/coins', coin)
          .then(function(response){
            coins.push(coin);
          })
          .catch(function(err){
            console.log(err);
          });
    }
  }
}());
