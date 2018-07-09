// require packages
const User = require('../models/user.js')
const mongoose = require('mongoose')
const router = require('express').Router();

    router.get('/login',(req,res)=>{
      res.render('login')


    })
    module.exports=router;
