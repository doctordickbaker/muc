var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  // res.render('index.html');
  // res.json({message: 'Welcome to the Server'});
});

app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});
