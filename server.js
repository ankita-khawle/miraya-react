const express = require('express');
const app = express(),
bodyParser = require("body-parser");
const util = require('util'); 
port = process.env.PORT || 5000;
var server_port = process.env.PORT || 5000 || 80;
var server_host = '0.0.0.0';

const request = require('request');
const { json } = require('express');
const path = require('path');


app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/count', async (req, res) => { 
  try {
    const options = {
        url: 'https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    }
    await request(options ,  (err, response, body)=> {
        if(body){
            let data = JSON.parse(body)
            res.send(data);
        }
        if(err){
            res.json(null);
        } 

    });
    
  } catch (error) {
    res.json('Error on get');
  }
});

app.get('/latest-data', async (req, res) => {
  try {
    const options = {
        url: 'https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    }
    await request(options ,  (err, response, body)=> {
        if(body){
            let data = JSON.parse(body)
            res.send(data);
        }
        if(err){
            res.json(null);
        } 

    });
    
  } catch (error) {
    res.json('Error on get');
  }
});

app.get('/cases-stats', async (req, res) => {
  try {
    const options = {
        url: 'https://api.covid19api.com/dayone/country/india',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    }
    await request(options ,  (err, response, body)=> {
        if(body){
          let data = JSON.parse(body);
          res.send(data);
        }
        if(err){
            res.json(null);
        } 

    });
    
  } catch (error) {
    res.json('Error on get');
  }
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});


app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});