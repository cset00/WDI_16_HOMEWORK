const express = require('express')
const app = express()
const PORT = 8888
const _ = require('lodash')


const compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
]
  
const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req,res) => {
    res.render('index', {compliment: _.sample(compliments), styleBg: `background-color: ${_.sample(colors)};`})
})

app.get('/:name', (req,res) => {
    const name = req.params.name

    res.render('index', {compliment: `${_.sample(compliments)}, ${name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()}!`, styleBg: `background-color: ${_.sample(colors)};`})
})






app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})