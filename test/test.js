
// require packages
const mocha = require('mocha');
const assert = require('assert')
//database
const User = require('../models/user.js')
const mongoose = require('mongoose')


before(function(done){
  //require database
  require('../app.js')
  done()
})

beforeEach(function(done){
  //drop collection
  mongoose.connection.collections.users.drop(function(){
    done()
  })
})

beforeEach(function(done){
  var newuser = new User({
    user_id: 'ikcgeckeler',
    password: 'johnathan'
  });

  newuser.save().then(function(){
    done()
  })
})

// describes the test within it
describe('database',function() {

//function where the tests occur create them
//it block creates two tests
it('finds a record', function(done){

  User.findOne({password:'johnathan'}).then(function(result){
    assert(result.password === 'johnathan');
    done()
  })


})


});
