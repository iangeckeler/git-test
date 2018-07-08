
// require packages
const mocha = require('mocha');
const assert = require('assert')
//database
const User = require('../models/user.js')
//require database
require('../app.js')


// describes the test within it
describe('database',function() {

//function where the tests occur create them
//it block creates two tests
it('saves a record', function(done){
  var newuser = new User({
    user_id: 'ikcgeckeler',
    password: 'johnathan'
  });

  newuser.save().then(function(){
    assert(newuser.isNew===false)
    done();
  });
})


});
