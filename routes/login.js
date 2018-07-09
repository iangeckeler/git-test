// require packages
const User = require('../models/user.js')
const mongoose = require('mongoose')
const router = require('express').Router();
const bodyParser = require('body-parser')
//pull in user schema
//const User = require('../models/user.js')


//body-parser
//testing packages
// require packages
const mocha = require('mocha');
const assert = require('assert')

    router.get('/login',(req,res)=>{
      res.render('login')
    })

    router.post('/addUser',(req,res)=>{
      //create and save new user
      var newuser = new User({
        user_id: req.body.user_id,
        email: req.body.email
      });

      newuser.save().then(function(){
    })
  })
    module.exports=router;
