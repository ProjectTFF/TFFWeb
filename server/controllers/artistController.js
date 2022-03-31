const { Artist,Links,Photos } = require('../db/database');
const db = require('../db/database');
const fs = require("fs");

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
    db.Artist.findByPk(artistid,{
        attributes :['artistid','firstname', 'lastname']
    })
        .then( artist => {
            db.Artist.findByPk(artistid,{
                attributes : ['biography_eng', 'biography_fin']
            })
            .then(a =>{
                const obj = JSON.parse(JSON.stringify(a));
                var path = './text/artistbios/';
                //remove the " character to have a proper link
                var find = '\"';
                var re = new RegExp(find, 'g');
                var file_eng = path.concat(JSON.stringify(obj.biography_eng)).replace(re,'');
                var file_fin = path.concat(JSON.stringify(obj.biography_fin)).replace(re,'');

                var buffer_eng = fs.readFileSync(file_eng);
                var buffer_fin = fs.readFileSync(file_fin);

                // use the toString() method to convert
                // Buffer into String
                var fileContent_eng = buffer_eng.toString();
                var fileContent_fin = buffer_fin.toString();
;
                var result = JSON.stringify(artist).replace('}',',')+
                '\"biography_eng\":\"'+fileContent_eng+'\",\"biography_fin\":\"'+fileContent_fin + '\"}';
                
                res.status(200).send(result);
            })
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
