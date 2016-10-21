var express = require('express');
var app = express();
var request = require('request');
var cors = require('cors');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// 이 부분은 app.use(router) 전에 추가하도록 하자
app.use(cors());


app.post('/', function (req, res) {
    request(req.body.url, function (error, response, body) {
        res.json(response);

        if (!error && response.statusCode == 200) {
            console.log(body) // Print the google web page.
        }
    })
});

app.listen(5000, function () {
    console.log('proxy for Api : 5000');
});