const express = require('express')
const server = express()
server.listen(5555);
console.log('5555 is ready');
const path = require('path');

const comroute = require('./router/company')
server.use('/', comroute);



const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/recordcompany', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)