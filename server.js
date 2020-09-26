//importando o express e o bodyParser
const express = require('express')
const bodyParser = require('body-parser')

//iniciando o express
const app = express()

//configurar o view engine  e a pasta estática
app.set('view engine','ejs')
app.use(express.static('public'))

//configurar o bodyParser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//rotas
app.get("/", (req,res)=>{
    res.send("Vai ETIM!")
})

//configuração da porta
app.listen(3000)