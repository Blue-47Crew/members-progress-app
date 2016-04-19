var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');

// require database (mongoose is the ORM and mongodb is the database)
require('../models/db.js');

var contactSchema = require('../models/Contact');

var Contacts = mongoose.model('business_contacts', contactSchema);

/* GET contacts */
router.get('/', function(req, res, next) {

  Contacts.find(function (err, contacts) {
    if (error) return error;
    res.json(contacts);
  });

});



module.exports = router;
