  
const express = require('express'),
mongoose = require('mongoose'),



app = express();
const connectDB = require('./config/db')



connectDB()
app.use(express.json({ extended: false }))
app.use('/register', require('./routes/register'))
app.use('/auth', require('./routes/auth'))
app.use('/testdetail' , require('./routes/testdetail'))
app.use('/question' , require('./routes/question'))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log (`Server started at port ${PORT}`))