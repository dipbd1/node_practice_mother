const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
//! Defined Express view Path
const viewsPath = path.join(__dirname, '../templates/views')
//! Partials Path
const partialPath = path.join(__dirname, '../templates/partials')


//! Seting param for app.set
app.set('view engine', 'hbs')
app.set('views', viewsPath)
//!Static File path
app.use(express.static(publicDirectoryPath))
//! hbs partial folder path
hbs.registerPartials(partialPath)


app.get('',(req, res)=>{
    res.render('index',{
        title: 'Weather app',
        name: 'XXX'
    })
})
app.get('/about',(req, res)=>{
    res.render('about', {
        title: 'About'
    })
})
app.get('/help',(req, res)=>{
    res.render('help', {
        helpText: "This is the help text",
        title: 'Help',
        name: 'Dip'
    })
})
//weather route
app.get('/weather', (req,res)=>{
    res.send({
        forecast: 'It is raining',
        location: 'Dhaka'
    })
})

app.get('/help/*', (req, res)=>{
    res.render('help404')
})

app.get('*',(req,res)=>{
    res.render('404page', {
        errorMessage: 'Page not found',
        errorType: '404'
    })
})

//server up code
app.listen(3000, ()=>{
    console.log('Server is Up in port 3000')
})