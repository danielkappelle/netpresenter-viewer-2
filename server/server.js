const express = require('express');
const app = express();

const path = require('path');
const request = require('request');

app.use(express.static(path.join(__dirname, '../client')));


app.get('/slides', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  if(req.query.channels) {
    /* Get the stuff here */
    var slides = [];
    var channels = JSON.parse(req.query.channels);
    var count = 0;
    for(idx in channels) {
      (function(channel) {
        request('http://netpresenter.tudelft.nl/netpresenter/published/' + channel + '/channel/pc/index.chn', function(err, response, body) {
          var pattern = /^%-- Slide No (\d+)[\s\S]*?BIMAGE "(.*?\.jpg)"[\s\S]*?SECONDS (\d+)/gm;
          var match;
  
          while(match = pattern.exec(body)) {
            slides.push({href: match[2], interval: match[3], channel: channel});
          }
  
          count += 1;
          if(count == channels.length) {
            console.log(slides);
            res.send(JSON.stringify(slides));
          }
        });
      })(channels[idx]);
    }
  } else {
    res.send(JSON.stringify({err: 'No URL specified'}));
  }  
});

app.get('/channels', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  request('http://netpresenter.tudelft.nl/netpresenter/published', function(err, response, body) {
    var pattern = /HREF="\/netpresenter\/published\/(.*?)\/"/gm;
    var match;
    var channels = [];
    while(match = pattern.exec(body)) {
      channels.push(match[1]);
    }

    res.send(JSON.stringify(channels));
  });
});

app.listen(3000, function() {
  console.log('Listening on 3000');
});


