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
require('dotenv').config();

const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
  });

exports.artist_info_by_id = function (req, res, next) {
    const artistid = req.params.artistid;
    /* A dummy way of getting data from DATABASE
    var return_info = artist_table.filter(obj => {
        return obj.artist_id === parseInt(artistid);
    });*/

    pool.query('SELECT * FROM test_artist_data WHERE id = $1', artistid, (err, result) => {
        if (err) {
          return next(err);
        }
        return res.json(result.rows[0]);
      });
}
