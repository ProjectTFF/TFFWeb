var express = require('express');
var router = express.Router();

var programmeController = require('../controllers/programmeController');

/* GET General programme introduction page*/
router.get('/', function(req, res, next) {
  res.send('Here we would serve some content for the general main page.');
});

router.get('/:programmeid', function(req, res, next) {
    //const artistid = req.params.artistid;
    programmeController.programme_info_by_id(req, res, next);
});

module.exports = router;