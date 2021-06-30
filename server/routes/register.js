require('dotenv').config()
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

//user Model 
const User = require('../models/User')

router.get('/',(req,res) => {
   User.find()
   .then(result => {
      res.status(200).json({
        Registereduser:result
      });
   })
   .catch(err=>{
     console.log(err);
     res.status(500).json({
       error:err
     })
   });
})

// @route POST /register
// @des Register a new user
// @access Public
router.post('/',
  [
    check('username', 'Please provide a name').not().isEmpty(),
    check('email', 'Please provide an email').isEmail(),
    check('password', 'Password at least 6 character long').isLength({ min: 6 })

  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }

    const { username, email, password } = req.body

    try {
      // user already exits ?
      let user = await User.findOne({ email })
      if (user) {
        return res.status(400).json({ error: [{ msg: 'user already exits' }] })
      }
      user = new User({
        username,
        email,
        password
      })

      // password encryption
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      await user.save()

      // sign a jsonwebtoken

      const payload = {
        user: {
          id: user.id
        }
      }

      jwt.sign(payload, process.env.SECRET, {
        expiresIn: 3600
      },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('server error')
    }
  })

// @route PUT /user/:id
// @des update user
// @access Private

router.put('/:id', auth, async (req, res) => {
  const { username, mobile, about, isconfirmed } = req.body

  // build user object 
  const userFields = { username, mobile, about, isconfirmed };

  try {
    let user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ msg: 'User not found' })
   
    if (user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorised' })
    }
   user = await User.findByIdAndUpdate(req.params.id, { $set: userFields }, { new: true })
    res.send(user)
  } catch (err) {
    console.errors(err.message)
    res.status(500).send('Server Error')
  }

})

module.exports = router