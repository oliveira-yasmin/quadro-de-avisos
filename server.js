//importando o express e o bodyParser
const express = require('express')
const bodyParser = require('body-parser')
const moment = require('moment')

//importando as rotas dos avisos
const routerAvisos = require('./components/avisos/AvisosController')

//iniciando o express
const app = express()

//configurar o view engine  e a pasta estática
app.set('view engine','ejs')
app.use(express.static('public'))

//disponibiliza o "moment" para o ejs
moment.locale("pt-br")
app.locals.moment = moment

//configurar o bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.use(routerAvisos)

//configuração da porta
app.listen(3000)
