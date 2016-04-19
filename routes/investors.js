var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');

// require database (mongoose is the ORM and mongodb is the database)
require('../models/db.js');

var investorSchema = require('../models/Member');

var Investors = mongoose.model('Members', investorSchema);

/* GET investors */
router.get('/', function(req, res, next) {

  Investors.find(function (err, investors) {
    if (error) return error;
    res.json(investors);
  })

});



module.exports = router;
