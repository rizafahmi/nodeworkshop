const express = require('express')
const path = require('path')

const app = express()

// View Engine setup
app.set('views', path.join(__dirname, 'templates'))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.get('/', function (req, resp) {
    resp.render('index')
})

app.get('/about', function (req, resp) {
    resp.send("Ini adalah workshop hacktiv8")
})

app.get('/echo/:name', function (req, resp) {
    resp.render("index", {nama: req.params.name})
})

app.get('/hacktiv8', function (req, resp) {
    resp.redirect("/about")
})

app.use(function (req, resp) {
    console.log("Masuk ga ya?")
    resp.status(404).send('Page not found')
})

app.listen(3000, function () {
    console.log("server is running...")
})