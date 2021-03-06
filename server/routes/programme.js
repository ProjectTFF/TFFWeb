var express = require('express');
var router = express.Router();

var programmeController = require('../controllers/programmeController');

/* GET General programme introduction page*/
router.get('/', function(req, res, next) {
  programmeController.all_performances(req, res, next);
});

router.get('/allprogrammes', function(req, res, next) {
    programmeController.programme_info(req, res, next);
});

router.get('/:concertid', function(req, res, next) {
  programmeController.programme_info_by_id(req, res, next);
});

router.get('/artists/:performanceid', function(req, res, next) {
  programmeController.artists_performance(req, res, next);
});

module.exports = router;