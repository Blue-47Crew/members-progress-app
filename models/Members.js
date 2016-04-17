var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema ({
  business_name: String
  // address: String,
  // city: String,
  // state: String,
  // zip_code: Number,
  // phone: Number,
  // email: String,
  // industry_sector: String,
  // contact_firstName: String,
  // contact_lastName: String,
  // incorporation: Boolean,
  // num_of_employees: Number,
  // blue_start_date: Date,
  // blue_end_date: Date,
  // invest_seeking: String,
  // investor_name: String,
  // invest_amount: String,
  // comments: String
});



module.exports = memberSchema;
