
const mongoose = require('mongoose')

const TestquestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  optionA: {
    type: String,
    required: true,
    
  },
  optionB: {
    type: String,
    required: true
  },
  optionC: {
    type: String,
    required: true,
   
  },
  optionD: {
    type: String,
    required: true
  },
  answer: {
    type: Number,
    required: true,
   
  }
 
 
})

module.exports = mongoose.model('testquestion', TestquestionSchema)