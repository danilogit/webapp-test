const express = require('express')
const path = require('path')
const hbs = require('hbs')

const port = process.env.PORT || 3000

var app = express()
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
app.use((req, resp, next) => {
  var date = new Date().toString()
  console.log(`${date}: ${req.ip} ${req.method} ${req.url} ${req.headers['user-agent']}`)
  next()
})

app.get('/', (req, res) => {
  res.render('about.hbs', {
    name: 'Danilo',
    date: new Date().toString()
  })
})

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
