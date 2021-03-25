var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var appRoot = require('app-root-path'); 
var HTTP_PORT = 80;
var HTTPS_PORT = 443;

var app = express(); 

// app.use(bodyParser.json());
app.use(bodyParser.json({limit:'500mb'}));
app.use(bodyParser.urlencoded({extended:true, limit:'500mb', parameterLimit : 100000}));
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));
mongoose.connect("mongodb://localhost:27017/asychronDev",{keepAlive:true});

// logger.info(JSON.stringify(process.env, null, 2))

// route requests by URI root 
app.use('/api', require('./_api/routes'));
app.listen(3200); 
module.exports = app
