var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blue|1647 App Tracker' });
});

module.exports = router;
