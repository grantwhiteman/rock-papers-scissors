const express = require('express')
const router = express.Router()
const play = require('../src/play')

router.post('/', (req, res) => {
  const endStatement = play(req.body.weapons)
  res.render('end', {
    name: req.app.locals.name,
    endStatement: endStatement
  })
})

module.exports = router
