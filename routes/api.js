const express = require('express')
const router = express.Router()

const Question = require('../models/Question')


router.get('/', async (req, res) => {
    try {
        const questions = await Question.find()
        res.json(questions)
    } catch (e) {
        console.log(e)
        res.send('error occured')
    }
})

router.post('/add', async (req, res) => {
    const { username } = req.session
    const { questionText } = req.body
    try {
        await Question.create(username, questionText)
        res.send('question added')
    } catch (e) {
        console.log(e)
        res.send('error occured')
    }
})
router.post('/answer', async (req, res) => {
    const {_id, answer} = req
})

module.exports = router