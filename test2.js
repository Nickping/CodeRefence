var express = require('express');
var app = express();


app.get('/', function(req, res){
    res.send('hello');
});

app.listen(3020, function(err){
    if(err) throw err;

    console.log('server is listening on port 3020');
});