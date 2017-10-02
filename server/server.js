const express = require('express');
const app = express();

const path = require('path');

app.get('/', function(req, res) {
  res.sendFile('index.html', {'root': path.join(__dirname, '../client')});
});

app.get('/slides', function(req, res) {
  console.log(req.query);
  if(req.query.url) {
    res.send('URL: ' + req.query.url);
  } else {
    res.send('No url');
  }
});

app.listen(3000, function() {
  console.log('Listening on 3000');
});
