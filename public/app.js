var express = require('express')
var app = express()

// set the view engine to ejs
app.set('view engine', 'ejs')

// use res.render to load up an ejs view file
app.set('views', './public/views')

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['css', 'html', 'jpg', 'svg', 'png', 'tff'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

app.use(express.static('public', options))

// index page
app.get('/index', function (req, res) {
  res.render('./pages/index')
})

// index/home page
app.get('/', function (req, res) {
  res.render('./pages/index')
})
// contact page
app.get('/contact', function (req, res) {
  res.render('./pages/contact')
})

app.listen(8088)
console.log('Server is listening on port 8080')
