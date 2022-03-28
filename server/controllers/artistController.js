const { Artist,Links,Photos } = require('../db/database');
const db = require('../db/database');

exports.all_artist = function(req,res,next){
    db.Artist.findAll({
        attributes: ['artistid','firstname', 'lastname']
    })
    .then( artist => {
        res.status(200).send(JSON.stringify(artist));
    })
    .catch( err => {
        res.status(500).send(JSON.stringify(err));
    })
}

exports.artist_info_by_id = function (req, res, next) {
    const artistid = req.params.artistid;

    // Querying is done with Sequalise's built-in functions: Finding every column by primary key
    db.Artist.findByPk(artistid)
        .then( artist => {
            res.status(200).send(JSON.stringify(artist));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
        
}

exports.links_for_artist = function(req,res,next) {
    const artist_id = req.params.artistid;
    db.Links.findOne({
        where: {
            artistid: artist_id
        },
        attributes: ['website', 'facebook', 'youtube', 'instagram', 'spotify']
        })
        .then( artist => {
            res.status(200).send(JSON.stringify(artist));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
}

/*exports.photos_for_artist = function(req,res,next) {
    const artist_id = req.params.artistid;
    db.Photos.findAll({
        where : {artistid: artist_id},
        attributes: ['photoid','photoref']
    })
}*/
