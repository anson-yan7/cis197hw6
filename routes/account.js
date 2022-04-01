const express = require('express')

const User = require('../models/User')


const router = express.Router()

router.post('/signup', async (req, res) => {
    const { username, password } = req.body
    console.log(req.session.username)
  try {
    await User.create({ username, password })
    res.send('succesful signup')
  } catch (e) {
      res.send('signup fail')
    console.log(e)
  }
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({username})
        if (user.password === password) {
            req.session.username = username
            res.send('successful login')
        } else{
            res.send('incorrect username or password')
        }
    } catch (e) {
        res.send('login fail')
        console.log(e)
    }
  })


router.post('/logout', (req, res) => {
    req.session.username = null
    res.send('you logged out')
})

module.exports = router