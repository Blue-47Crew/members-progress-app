var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

// require database (mongoose is the ORM and mongodb is the database)
require('../models/db.js');

var memberSchema = require('../models/Members');

var Members = mongoose.model('Members', memberSchema);

/* GET members listing. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Members' });
  Members.find(function (err, members) {
    console.log(members);
    res.json(members);
  })
});



module.exports = router;
