//mongodb://<dbuser>:<dbpassword>@ds131551.mlab.com:31551/challenge_app


//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://challengeapp:312Arizona@ds131551.mlab.com:31551/challenge_app';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const User = require('')

//how to create an instance
/*
// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});
*/
