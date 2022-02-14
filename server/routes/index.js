var express = require('express');
const { resource } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Testing route for https request */
router.get('/test_route', function(req, res, next) {
  res.json({message: "Hello from the server!"});
})
module.exports = router;
