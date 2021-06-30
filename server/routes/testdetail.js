require('dotenv').config()
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//user Model 
const Test = require('../models/Test')

router.get('/',(req,res) => {
  Test.find()
   .then(result => {
      res.status(200).json({
        Testdetail:result
      });
   })
   .catch(err=>{
     console.log(err);
     res.status(500).json({
       error:err
     })
   });
})

router.post('/',(req,res) => {

  var test=  new Test(req.body);
  test.save(function(err,result){
    res.json(result);
  })
  

 

})

module.exports = router