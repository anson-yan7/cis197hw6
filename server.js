const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')

const AccountRouter = require('./routes/account')
const ApiRouter = require('./routes/api.js')

const app = express()
const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://ansonyan:123@cluster0.2pb5n.mongodb.net/Cluster0?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.get('/', (req, res) => {

})
app.use(express.json())

app.use('/account', AccountRouter)

app.use('/api/questions', ApiRouter)

app.use(cookieSession({
    name: 'session',
    keys: ['pineapple'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))

  app.listen(3000, () => {
    console.log('listening on 3000')
    console.log('mongoDB is connected')
  })