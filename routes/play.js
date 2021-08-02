const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  req.app.locals.player = req.body.player
  res.redirect('/play')
})

router.get('/', (req, res) => {
  res.render('play', {
    name: req.app.locals.player
  })
})

module.exports = router