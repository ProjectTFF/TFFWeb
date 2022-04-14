// const { ClientIp } = require('../db/database');
// const db = require('../db/database');
const fs = require("fs");

exports.links_for_ClientIp = function(req,res,next) {
    const ClientIp_id = req.params.ClientIpid;
    db.Links.findOne({
        where: {
            ClientIpid: ClientIp_id
        },
        attributes: ['website', 'facebook', 'youtube', 'instagram', 'spotify']
        })
        .then( ClientIp => {
            res.status(200).send(JSON.stringify(ClientIp));
        })
        .catch( err => {
            console.log(JSON.stringify(err))
            var error = {"error":"An error occurred during the gathering of links for this ClientIp"}
            res.send(JSON.stringify(error));
        })
}