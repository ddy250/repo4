var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
router.get('/', function(req, res, next) {
    request('https://hidden-retreat-94036.herokuapp.com/youtube-list', function (error, response, body) {
        var c;
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        c= JSON.parse(body);
        res.render('about', { title: 'About | ZoomInfo', c:c });
    });

});

module.exports = router;
