var artist_table = [
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
]

const { Client } = require('pg');
const client = new Client(
    {
        user: 'ClownFish',
        host: 'db',
        database: 'tffgodb',
        password: 'ClownMan',
        port: 5432,
    }
);

exports.artist_info_by_id = function (req, res, next) {
    const artistid = req.params.artistid;
    /* A dummy way of getting data from DATABASE
    var return_info = artist_table.filter(obj => {
        return obj.artist_id === parseInt(artistid);
    });*/

    client.query('SELECT * FROM test_artist_data WHERE id = $1', artistid, (err, result) => {
        if (err) {
          return next(err);
        }
        return res.json(result.rows[0]);
      });
}
