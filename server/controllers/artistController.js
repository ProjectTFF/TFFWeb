const db = require('../db/database');

exports.artist_info_by_id = function (req, res, next) {
    const artistid = req.params.artistid;
    /* A dummy way of getting data from DATABASE
    var return_info = artist_table.filter(obj => {
        return obj.artist_id === parseInt(artistid);
    });*/

    // Querying is done with Sequalise's built-in functions: Finding every column by primary key
    db.Artist.findByPk(artistid)
        .then( artist => {
            res.status(200).send(JSON.stringify(artist));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })
}
