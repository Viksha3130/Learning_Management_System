  
const mongoose = require('mongoose')
testquestion = require('./Testquestion.js'),
TestquestionSchema = mongoose.model('testquestion').schema;

const TestSchema = new mongoose.Schema({
  
  testid: {
    type: String
},
  Testname: {
    type: String,
    required: true
  },
  Testdescription: {
    type: String,
    required: true,
   
  },
  Testduration: {
    type: Number,
    required: true
  },
  Testinstruction: {
    type: String,
    required: true,
   
  },
  testAttemptedBy: [],
  questions: [TestquestionSchema],
  created: {
      type: Date,
      default: Date.now
  }

})

module.exports = mongoose.model('test', TestSchema)