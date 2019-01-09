var express = require('express');
var app = express();
var socket = require('socket.io');
var server = app.listen(4000,function(){
  console.log("pleeeeadresrrr");
});

//static / public files
//folder to serve
app.use(express.static('public'));


//socket setup

var io = socket( )