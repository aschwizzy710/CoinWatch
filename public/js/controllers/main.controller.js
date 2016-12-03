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
      $scope.selected = coin;
    }
    console.log(searchCoins());

    $scope.widgetLookup = {
      "Bitcoin": "https://dc-charts.com/fw/coinbase_btc_usd_24hours_3.png",
      "Litecoin": "https://dc-charts.com/fw/bitfinex_ltc_btc_24hours_3.png",
      "Dash": "https://dc-charts.com/fw/poloniex_dash_btc_24hours_3.png",
      "Dogecoin": "https://dc-charts.com/fw/poloniex_doge_btc_24hours_3.png",
      "Earthcoin": "https://dc-charts.com/fw/btc38_eac_btc_24hours_3.png",
      "Ethereum": " https://dc-charts.com/fw/poloniex_eth_btc_24hours_3.png",
      "Monero": "https://dc-charts.com/fw/hitbtc_xmr_btc_24hours_3.png",
      "Namecoin": "https://dc-charts.com/fw/btce_nmc_btc_24hours_3.png",
      "Novacoin": "https://dc-charts.com/fw/btce_nvc_btc_24hours_3.png",
      "Nxt": "https://dc-charts.com/fw/hitbtc_nxt_btc_24hours_3.png",
      "Peercoin": "https://dc-charts.com/fw/btce_ppc_btc_24hours_3.png",
      "Primecoin": "https://dc-charts.com/fw/btc38_xpm_cny_24hours_3.png",
      "Ripple": "https://dc-charts.com/fw/poloniex_xrp_btc_24hours_3.png",
      "Stellar": "https://dc-charts.com/fw/poloniex_str_btc_24hours_3.png"

    };

  }



}());
