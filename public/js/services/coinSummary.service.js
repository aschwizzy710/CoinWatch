(function() {
  angular.module('CoinWatch')
        .factory('CoinSummaryService', CoinSummaryService);

  CoinSummaryService.$inject = ['$http'];

  function CoinSummaryService($http){
    init();
    getSavedCoinsFromServer();
    var coins = [];
    var savedCoins = [];
    return {
      get: getAllCoins,
      getSaved: getSavedCoins,
      create: createSavedCoin,
      delete: deleteSavedCoin
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
    function getSavedCoins(){
      return savedCoins;
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
    function deleteSavedCoin(coin){

    }

    function getSavedCoinsFromServer(){
       $http.get('/coins')
            .then(function(response){
              console.log(response.data);
              savedCoins = response.data.coins;
            })
            .catch(function(err){
              console.log(err);
            });
    }
  }
}());
