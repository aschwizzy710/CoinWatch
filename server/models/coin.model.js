var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var coinSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

var Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;
