var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var investorSchema = new Schema ({
  investor_name: String,
  address: String,
  city: String,
  state: String,
  zip_code: Number,
  phone: Number,
  email: String,
  business_name: String,
  invest_amount: String,
  invest_seeking: String,
});


module.exports = investorSchema;
