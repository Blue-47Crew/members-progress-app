var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = express.Router();

// require database (mongoose is the ORM and mongodb is the database)
require('../models/db.js');

var memberSchema = require('../models/Member');

var Members = mongoose.model('Members', memberSchema);

/* GET members  */
router.get('/', function(req, res, next) {

  Members.find(function (error, members) {
    if (error) return error;
    res.json(members);
  });
});

/* CREATE members  */
router.post('/', function(req, res, next) {

 var member = new Members(req.body);
 member.save(function(error, member) {
   if (error) return error;
   res.send(member);
 });
});


/* UPDATE members  */
router.put('/:id', function(req, res, next) {

  Members.findByIdAndUpdate(id, update, req.body, function(error, member) {
    if (error) return error;
    res.json(member);
  });
});





/* DELETE members  */


module.exports = router;
