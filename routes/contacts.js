var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// require database (mongoose is the ORM and mongodb is the database)
require('../models/db.js');

var contactSchema = require('../models/Contact');

var Contacts = mongoose.model('business_contacts', contactSchema);

/* GET members listing. */
router.get('/', function(req, res, next) {
  Contacts.find(function (err, contacts) {
    console.log(contacts);
    res.json(contacts);
  })
});



module.exports = router;
