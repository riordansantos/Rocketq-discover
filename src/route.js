
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')
const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))
route.get('/login', (req, res) => res.render('login'))
route.get('/signup',(req, res) => res.render('signup'))
route.get('/myrooms', (req, res) => res.render('myrooms'))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

//formato que o formulario de dentro da modal passa as informacoes
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)


module.exports = route