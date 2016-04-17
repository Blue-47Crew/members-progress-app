var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// require database (mongoose is the ORM and mongodb is the database)
require('../models/db.js');

var investorSchema = require('../models/Member');

var Investors = mongoose.model('Members', investorSchema);

/* GET members listing. */
router.get('/', function(req, res, next) {
  Investors.find(function (err, investors) {
    console.log(investors);
    res.json(investors);
  })
});



module.exports = router;
