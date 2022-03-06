var express = require('express');
var router = express.Router();

var artistController = require('../controllers/artistController');

/* GET General artist introduction page*/
router.get('/', function(req, res, next) {
  res.send('Here we would serve some content for the general main page.');
});

router.get('/', function(req, res, next) {
    var artist_info = {
         name : "first last",
         top_songs: "name1;name2;name3",
         description: "This artist somethin something...",
        some_field1 : "asdasd",
        some_field2 : "asfgd"
    };
    router.send(artist_info);
});

router.get('/:artistid', function(req, res, next) {
    //const artistid = req.params.artistid;
    artistController.artist_info_by_id(req, res, next);
})


module.exports = router;
