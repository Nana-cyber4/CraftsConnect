const express = require('express')
const mongoose = require('mongoose')

const app = express()

//database connection
require('./config/dbconnection')


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res)=> {
    res.render('index')
})

app.get('/index', (req, res)=> {
    res.render('index')
})

app.get('/about', (req, res)=> {
    res.render('about')
})

app.get('/upload', (req, res)=> {
    res.render('upload')
})

app.get('/signup', (req, res)=> {
     res.render('signup')
})

app.get('/login', (req, res)=> {
    res.render('login')
})


app.get('/crafts', (req, res)=> {
    res.render('crafts-sales')
})

app.get('/cart', (req, res)=> {
    res.render('cart')
})

app.get('/detail', (req, res)=> {
    res.render('craftsDetail')
})

app.get('/services', (req, res)=> {
    res.render('craftsService')
})

app.get('/craftsmanSignup', (req, res)=> {
    res.render('craftsmanSignup')
})

app.get('/craftsmanLogin', (req, res)=> {
    res.render('craftsmanLogin')
})

app.get('/craftsmanDetail', (req, res)=> {
    res.render('craftsmanDetail')
})

app.get('/profile', (req, res)=> {
    res.render('profile')
})

app.get('/upload', (req, res)=> {
    res.render('upload')
})

app.get('/contact', (req, res)=> {
    res.render('contact')
})
const port = 3000
app.listen(port, ()=>{
    console.log('Server has started on port ${port}')
})