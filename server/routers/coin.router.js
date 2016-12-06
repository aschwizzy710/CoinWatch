var express = ('express');
var router = express.Router();
var Coin = require("../models/coin.model.js");

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/coins', function(req, res){
  Coin.find({}, function(err, foundCoins){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      coins: foundCoins
    });
  });
});

router.get('/coins/:name', function(req, res){
  Coin.find({ name: req.params.name }, function(err, foundCoin){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      coin: foundCoin
    });
  });
});

router.post('/coins', function(req, res){
  console.log(req.body);
  var coin = new Coin(req.body);
  coin.save(function(err){
    if(err){
      res.status(500).json({
        err: err
      });
    }
    res.status(200).json({
      msg: "Added to Watch List!"
    });
  });
});
router.delete('/coins/:name', function(req, res){

});

module.exports = router;
