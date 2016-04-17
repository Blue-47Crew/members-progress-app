var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema ({
  business_name: String,
  contact_firstName: String,
  contact_lastName: String,
  phone: Number,
  email: String,
});


module.exports = contactSchema;
