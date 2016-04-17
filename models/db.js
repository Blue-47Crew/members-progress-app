  var mongoose = require('mongoose');

// 1 - a connection string
  var connectionString = 'mongodb://localhost/blue1647';

// 2 -  make connection to database
  mongoose.connect(connectionString);

// 3 - listen for events and log changes
  mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + connectionString);
  });
  mongoose.connection.on('error', function(error) {
    console.log('Mongoose connection error ' + error);
  });
  mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected from ' + connectionString);
  });
