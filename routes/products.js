var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next)
{
  res.render('products.html');
});

router.get('/Product', function(req, res, next)
{
  var request = require('request');
  request('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
  });
});

router.get('/Product/Review', function(req, res, next)
{
  var request = require('request');
  request('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
  });
});

module.exports = router;