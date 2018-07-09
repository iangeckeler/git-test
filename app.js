var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var path = require('path')
var ejs = require('ejs')


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

//import routes for Login
const loginRoutes = require('./routes/login.js')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//static files
app.use(express.static(__dirname + '/views'));

//set the app
app.set('view engine','ejs')
app.set('views','views')

//setup routes
//app.use('/',loginRoutes)

app.get('/',function(req,res){
  res.render('login')
})
