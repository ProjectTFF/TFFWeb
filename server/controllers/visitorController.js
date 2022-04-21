const db = require('../db/database');
const fs = require("fs");

// exports.all_artist = function(req,res,next){
//     db.Artist.findAll({
//         attributes: ['artistid','firstname', 'lastname']
//     })
//     .then( artists => {
//         artists.map(artist => {
//             if (parseInt(artist.artistid,10)==3)
//             {
//                 artist.firstname = 'Sébastian';
//             }
//             else if (parseInt(artist.artistid,10)==4)
//             {
//                 artist.lastname = 'Jämsä';
//             }
//             else if (parseInt(artist.artistid,10)==5)
//             {
//                 artist.lastname = 'Kärkkäinen';
//             }
//         })
//         res.status(200).send(JSON.stringify(artists));
//     })
//     .catch( err => {
//         console.log(JSON.stringify(err))
//         var error = {"error":"An error occurred during the gathering of all the artist"}
//         res.send(JSON.stringify(error));
//     })
// }

exports.log_visit = function(req, res, next){
    db.VisitorLog.create()
    .then( () => {
        console.log("Vierailija kirjattu lokiin");
    })
    .catch( err => {
        console.log(JSON.stringify(err));
    })
}
