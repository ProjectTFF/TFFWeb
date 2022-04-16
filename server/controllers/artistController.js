const { Artist,Links,Photos } = require('../db/database');
const db = require('../db/database');
const fs = require("fs");

exports.all_artist = function(req,res,next){
    db.Artist.findAll({
        attributes: ['artistid','firstname', 'lastname']
    })
    .then( artists => {
        artists.map(artist => {
            if (parseInt(artist.artistid,10)==3)
            {
                artist.firstname = 'Sébastian';
            }
            else if (parseInt(artist.artistid,10)==4)
            {
                artist.lastname = 'Jämsä';
            }
            else if (parseInt(artist.artistid,10)==5)
            {
                artist.lastname = 'Kärkkäinen';
            }
        })
        res.status(200).send(JSON.stringify(artists));
    })
    .catch( err => {
        console.log(JSON.stringify(err))
        var error = {"error":"An error occurred during the gathering of all the artist"}
        res.send(JSON.stringify(error));
    })
}

exports.artist_info_by_id = function (req, res, next) {
    const artistid = req.params.artistid;

    // Querying is done with Sequalise's built-in functions: Finding every column by primary key
    db.Artist.findByPk(artistid,{
        attributes :['artistid','firstname', 'lastname']
    })
        .then( artist => {
            if (parseInt(artistid,10)==3)
            {
                artist.firstname = 'Sébastian';
            }
            else if (parseInt(artistid,10)==4)
            {
                artist.lastname = 'Jämsä';
            }
            else if (parseInt(artistid,10)==5)
            {
                artist.lastname = 'Kärkkäinen';
            }

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
            .catch( err => {
                console.log(JSON.stringify(err));
                var error = {"error":"An error occurred during the gathering of the bio of this artist"};
                res.send(JSON.stringify(error));
            })
        })
        .catch( err => {
            console.log(JSON.stringify(err));
            var error = {"error":"An error occurred during the gathering of the general information about this artist"};
            res.send(JSON.stringify(error));
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
            console.log(JSON.stringify(err));
            var error = {"error":"An error occurred during the gathering of links for this artist"};
            res.send(JSON.stringify(error));
        })
}

exports.photos_for_artist = function(req,res,next) {
    const artist_id = req.params.artistid;
    db.Photos.findByPk(artist_id,{
        attributes: ['photoid','photoref']
    })
    .then( artist => {
            res.status(200).send(JSON.stringify(artist));
    })
    .catch( err => {
        console.log(JSON.stringify(err))
        var error = {"error":"An error occurred during the gathering of the photos for this artist"}
        res.send(JSON.stringify(error));
    })
}
