var artist_info = {
     name : "first last",
     top_songs: "name1;name2;name3",
     description: "This artist somethin something...",
    some_field1 : "asdasd",
    some_field2 : "asfgd"
};

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

exports.artist_info_by_id = function (req, res, next) {
    const artistid = req.params.artistid;
    // A dummy way of getting data from DATABASE
    var return_info = artist_table.filter(obj => {
        return obj.artist_id === parseInt(artistid);
    });

    return res.json(return_info);
}
