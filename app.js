var express = require('express');
var mongoose = require('mongoose');


var app = express()
app.listen(3000, () => console.log('Example app listening on port 3000!'))

//Set up mongoose connection
var mongoDB = 'mongodb://localhost/challengeapp' /*'mongodb://challengeapp:312Arizona@ds131551.mlab.com:31551/challenge_app';*/
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
mongoose.connection.once('open',function(){
  console.log('connection has been made')
}).on('err',function(err){
  console.log('connection error',err)
})
