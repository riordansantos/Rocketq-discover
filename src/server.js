const express = require('express')
const route = require('./route')
const path = require('path')
const bodyParser = require('body-parser')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static("public"))

server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended:true}))

server.use(route)

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false}))

server.listen(3001, () => console.log("RODANDO"))