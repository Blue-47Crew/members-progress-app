var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var bodyParser = require('body-parser');

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
 member.save(function(error) {
   if (error) {
     return res.send(error);
   }
   res.send({ message: "Member added."});
 });

});


/* UPDATE members  */



/* DELETE members  */


module.exports = router;
