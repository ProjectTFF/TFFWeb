var programme_table = [
    {
        programme_id : 1,
        name : "abcd",
        date : "01/01/2022",
        performers : ["artist1","artist2"]
    },
    {
        programme_id : 2,
        name : "ef",
        date : "02/02/2022",
        performers : ["artist1","artist2"]
    },
    {
        programme_id : 3,
        name : "ghi",
        date : "03/03/2022",
        performers : ["artist1","artist2"]
    },
]

exports.programme_info_by_id = function (req, res, next) {
    const programmeid = req.params.programmeid;
    // A dummy way of getting data from DATABASE
    var return_info = programme_table.filter(obj => {
        return obj.programme_id === parseInt(programmeid);
    });

    return res.json(return_info);
}