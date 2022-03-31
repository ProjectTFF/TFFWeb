var express = require('express');
var router = express.Router();

var artistController = require('../controllers/artistController');

/* GET General artist introduction page*/
router.get('/', function(req, res, next) {
    artistController.all_artist(req, res, next);
});

router.get('/:artistid', function(req, res, next) {
    const artistid = parseInt(req.params.artistid,10);
    if (Number.isInteger(artistid) && (artistid>0) && (artistid<13))
    {
        artistController.artist_info_by_id(req, res, next);
    }
    else
    {
        var error = {"error":"This id is not correct"}
        res.send(JSON.stringify(error));
    }
})

router.get('/links/:artistid',function(req,res,next){
    const artistid = parseInt(req.params.artistid,10);
    if (Number.isInteger(artistid) && (artistid>0) && (artistid<13))
    {
        artistController.links_for_artist(req,res,next);
    }
    else
    {
        var error = {"error":"This id is not correct"}
        res.send(JSON.stringify(error));
    }
})

/*router.get('/photos/:artistid',function(req,res,next){
        const artistid = parseInt(req.params.artistid,10);
    if (Number.isInteger(artistid) && (artistid>0) && (artistid<number_of_photos))
    {
        artistController.photos_for_artist(req,res,next);
    }
    else
    {
        var error = {"error":"This id is not correct"}
        res.send(JSON.stringify(error));
    }
})*/


module.exports = router;
