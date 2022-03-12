var express = require('express');
var router = express.Router();

var soundController = require('../controllers/soundController');

router.post('/sendsound',function(req,res,next)
{
    var sound = req.body.sound;
    res.send('Sound successfully saved');
})

router.get('/allsounds', function(req, res, next) {
    soundController.allsounds(req, res, next);
})


module.exports = router;