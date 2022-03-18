var express = require('express');
const { resource } = require('../app');
var router = express.Router();


// GET is for getting data from the server
// POST is for sending data to the serer
// PUT is for 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* Testing route for https request */
router.get('/test_route', function(req, res, next) {
  res.json({message: "Hello from the server!" + process.env.PGUSER});
})

module.exports = router;
