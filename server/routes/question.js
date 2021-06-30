require('dotenv').config()
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//user Model 
const Testquestion= require('../models/Testquestion')

router.get('/',(req,res) => {
  Testquestion.find()
   .then(result => {
      res.status(200).json({
        Question:result
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

  var testquestion=  new Testquestion(req.body);
  testquestion.save(function(err,result){
    res.json(result);
  })
  

 

})

module.exports = router