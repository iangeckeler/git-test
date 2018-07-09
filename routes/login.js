// require packages
const User = require('../models/user.js')
const mongoose = require('mongoose')
const router = require('express').Router();
const bodyParser = require('body-parser')


//body-parser
//testing packages
// require packages
const mocha = require('mocha');
const assert = require('assert')

    router.get('/login',(req,res)=>{
      res.render('login')
    })

    router.post('/addUser',(req,res)=>{
      console.log(req.body)
    })
    module.exports=router;
