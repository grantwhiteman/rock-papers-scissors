const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

const indexRouter = require('./routes/index')
const playRouter = require('./routes/play')
const endRouter = require('./routes/end')

app.use('/', indexRouter)
app.use('/play', playRouter)
app.use('/end', endRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})