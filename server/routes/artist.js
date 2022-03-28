var express = require('express');
var router = express.Router();

var artistController = require('../controllers/artistController');

/* GET General artist introduction page*/
router.get('/', function(req, res, next) {
    artistController.all_artist(req, res, next);
});

router.get('/:artistid', function(req, res, next) {
    //const artistid = req.params.artistid;
    artistController.artist_info_by_id(req, res, next);
})

router.get('/links/:artistid',function(req,res,next){
    artistController.links_for_artist(req,res,next);
})

/*router.get('/photos/:artistid',function(req,res,next){
    artistController.photos_for_artist(req,res,next);
})*/


module.exports = router;
