// require packages
const mocha = require('mocha');
const assert = require('assert')
//database
const User = require('../models/user.js')
const mongoose = require('mongoose')
const router = require('express').Router();


before(function(done){
  //require database
  require('../app.js')
  done()
})

describe('test login route', function(){
  it('test for route',function(done){
    router.get('/login',function(req,res){
      res.render('../login.html')
      done()


    })
    module.exports=router;

  })


})
