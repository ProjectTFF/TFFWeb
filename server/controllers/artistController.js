/*var artist_table = [
    {
        artist_id : 1,
         name : "Rihanna",
         top_songs: "name1;name2;name3",
         description: "This artist somethin something...",
        some_field1 : "asdasd",
        some_field2 : "asfgd"
    },
    {
        artist_id : 2,
         name : "Madonna",
         top_songs: "name1;name2;name3",
         description: "This artist somethin something...",
        some_field1 : "asdasd",
        some_field2 : "asfgd"
    },
    {
        artist_id : 3,
         name : "Lordi",
         top_songs: "name1;name2;name3",
         description: "This artist somethin something...",
        some_field1 : "asdasd",
        some_field2 : "asfgd"
    },
]*/
// require('dotenv').config();
const db = require('../db/database');

exports.artist_info_by_id = function (req, res, next) {
    const artistid = req.params.artistid;
    /* A dummy way of getting data from DATABASE
    var return_info = artist_table.filter(obj => {
        return obj.artist_id === parseInt(artistid);
    });*/

    // Querying is done with Sequalise's built-in functions: Finding every column by primary key
    db.Test_artist_data.findByPk(artistid)
        .then( artist => {
            res.status(200).send(JSON.stringify(artist));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        })

}
