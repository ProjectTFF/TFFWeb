var express = require('express');
var router = express.Router();
var path = require('path');
const { stringify } = require('querystring');

/* Serving the Soundbow page 
TODO: Set cookie to track client from sending multiple files in a row.
*/
router.get('/', function(req, res) {
    // res.render('../public/soundbow.html');
    res.send(path.join(__dirname, '../', 'public', 'soundbow.html'));
})

/* POST request for sending Soundbow data 
    Requirements for taking in data:
     - IP hasn't sent a response just earlier (This needs the database)
     - Given cookie hasn't just sent a response (This also needs the database)
     - File validation for security:
      - Check that file exists
      - Check the file size
      - Check the file ending (user has selected recorded file)
      - Check the file encoding (????)
      - Use external package for MIME types (???)
     
*/
router.post('/save', function(req, res) {
    
    const videoFile = req.files.soundbow_video;
    // const savePath = __dirname + '/images/' + image.name
    const savePath = path.join(__dirname, '..', 'upload', videoFile.name);
    var clientIP =  'Sender ip: ' + stringify(req.ip);
    var clientremoteAddr = 'Sender remoteAddr: ' + stringify(req.RemoteAddr);
    console.log( stringify((req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim()));

    console.log('3rd party app clientIP: ' + stringify(req.clientIp));
    console.log(clientIP);
    console.log(clientremoteAddr);
    console.log('jonkun ip: ' + req.socket.remoteAddress);
    
    videoFile.mv(savePath, (error) => {
        if (error) {
            console.log(error);
            res.writeHead(500, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({status: 'error', message: error, clientIP: clientIP, clientremoteAddr: clientremoteAddr }));
            return;
            }
            
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({status: 'success', path: savePath, clientIP: clientIP, clientremoteAddr: clientremoteAddr }));
        }
    )
})

module.exports = router;