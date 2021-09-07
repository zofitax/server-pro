require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {dbConn} = require('./database/config');

const app = express();
app.use(cors());
//base de datos 
dbConn();

//Rutas
app.get( '/', (req, res) => {
    res.json({ok: true,
    msg: 'ARAZOFT'})
} );



app.listen(3000, () => {
    console.log('arazoft 3000');
})
