var express = require('express');
var router = express.Router();
var path = require('path');
const { stringify } = require('querystring');
require("es6-promise").polyfill()
require("isomorphic-fetch")

/* POST request for sending Soundbow data 
    Requirements for taking in data:
     - Given cookie hasn't just sent a response (This also needs the database)
     - File validation for security:
     - Check that file exists
     - Check the file size
     - Check the file ending (user has selected recorded file)
     - Check the file encoding (????)
     - Use external package for MIME types (???)
*/
router.post('/save', function(req, res) {
    
    // Check that cooke isn't yet used.
    var cookie = req.cookies.hasSentSound;
    if (cookie == undefined) {
        var errorMessage = 'Cookie is missing. Please enable cookies on your browser and try again.'
        console.log(errorMessage);
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });
        
        res.end(JSON.stringify({status: 'error', message: errorMessage}));
        return;
    }
    else if (cookie === 'true') {
        var errorMessage = 'You have already uploaded one sound!'
        console.log(errorMessage);
        res.writeHead(500, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({status: 'error', message: errorMessage}));
        return;
    }
    else {
        console.log("Cookie exists, and hasn't been used: " + cookie);
        
        // Check the reCaptchaToken
        const { headers: { token } } = req;
        const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SERVER_KEY
        console.log("RECAPTCHA_SERVER_KEY: " + RECAPTCHA_SERVER_KEY);
        console.log("token käyttäjältjä: " + token);
        // Validate Human
        fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        },
        body: `secret=${RECAPTCHA_SERVER_KEY}&response=${token}`
        })
        .then(res => res.json())
        .then(json => {
            const isHuman = json.success;
            console.log("ihmiststatus: " + isHuman);
            if (token === null || !isHuman) {
                res.writeHead(500, {
                    'Content-Type': 'application/json'
                });
                res.end(JSON.stringify({status: 'Unsuccesfull', message: 'YOU ARE NOT A HUMAN.'}));
                return;
            }
    
            // The code below will run only after the reCAPTCHA is succesfully validated.
            console.log("SUCCESS!")
    
            // TODO: Validate, Sanitize and Upload the data in payload
            // const { payload: {data} } = req;

            res.cookie('hasSentSound', 'true');
    
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({status: 'success'}));
            return;
        })
        .catch(err => {
            console.log('recaptcha response is undefined ??');
            console.log(err.message);
            res.writeHead(500, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({status: 'error', message: err.message}));
            return;
        })

        
    }
})

module.exports = router;