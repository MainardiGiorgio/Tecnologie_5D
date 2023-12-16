var express = require('express');
var app = express();
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'index.html'));
});

app.get('/goty', function (req, res) {
    res.sendFile(path.join(__dirname,'goty.html'));
});

app.get('/top', function (req, res) {
    res.sendFile(path.join(__dirname,'top.html'));
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
