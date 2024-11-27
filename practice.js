const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello hey i am')
})
app.get('/client', function (req, res) {
    res.send('Hello hey i am')
  })


app.listen(3000)