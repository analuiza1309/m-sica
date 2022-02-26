const express = require('express');
const app = express();
//const bodyParser=require('body-parser');

const musicas = require('./routes/musicaRoutes');
const index = require ('./routes/index')

//app.use(bodyParser.json())
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.use(express.static('public'))

app.use('/',index);
app.use('/musica',musicas);

module.exports=app 