const {Performance, Concert, Programme, Venue } = require('../db/database');
const db = require('../db/database');
const fs = require("fs");

exports.all_performances = function(req,res,next) {
    db.Performance.findAll({
        attributes: ['performanceid','performancename_eng', 'performancename_fin']
    })
    .then( performances => {
        performances.map(performance => {
            if (parseInt(performance.performanceid,10)==4)
            {
                performance.performancename_fin = 'Inside the French School - lämmittely';
            }
            else if (parseInt(performance.performanceid,10)==5)
            {
                performance.performancename_eng = 'Masterclass: Sébastian Jacot';
                performance.performancename_fin = 'Mestarikurssi: Sébastian Jacot';
            }
            else if (parseInt(performance.performanceid,10)==11)
            {
                performance.performancename_eng = 'Recital: An American in Paris - Beatriz Macías and Alexis Roman';
                performance.performancename_fin = 'Resitaali: An American in Paris - Beatriz Macías and Alexis Roman';
            }
            else if (parseInt(performance.performanceid,10)==14)
            {
                performance.performancename_eng = 'Masterclass: Sébastian Jacot';
                performance.performancename_fin = 'Mestarikurssi: Sébastian Jacot';
            }
            else if (parseInt(performance.performanceid,10)==15)
            {
                performance.performancename_eng = 'Recital: La flute enchantée - Sébastian Jacot';
                performance.performancename_fin = 'Resitaali: La flute enchantée - Sébastian Jacot';
            }
            else if (parseInt(performance.performanceid,10)==17)
            {
                performance.performancename_eng = 'JÄÄ//ICE Gala Concert';
                performance.performancename_fin = 'JÄÄ//ICE - Gaalakonsertti';
            }
        })
        res.status(200).send(JSON.stringify(performances));
    })
    .catch( err => {
        console.log(JSON.stringify(err))
        var error = {"error":"An error occurred during the gathering of all the performances"}
        res.send(JSON.stringify(error));
    })
}

exports.programme_info = function (req, res, next) {
    db.sequelize.query('SELECT concertid, concertname, concertdate, Venue.venueid, venuename FROM Concert JOIN Venue ON Concert.venueid = Venue.venueid', {
        type: db.sequelize.QueryTypes.SELECT
      })
    .then(concerts => {
        concerts.map(concert => {
        if(parseInt(concert.concertid,10)==1)
        {
            concert.concertname = 'TFF Kid';
        }
        else if(parseInt(concert.concertid,10)==2)
        {
            concert.concertname = 'TFF Youth Morning Pass';
        }
        else if(parseInt(concert.concertid,10)==3)
        {
            concert.concertname = 'TFF Youth Lunch Pass';
        }
        else if(parseInt(concert.concertid,10)==4)
        {
            concert.concertname = 'TFF Jää/Ice Morning Pass';
        }
        else if(parseInt(concert.concertid,10)==5)
        {
            concert.concertname = 'TFF Jää/Ice Lunch Pass';
        }
        
        })
        
        res.status(200).send(JSON.stringify(concerts));
    })
    .catch( err => {
        console.log(JSON.stringify(err));
        var error = {"error":"An error occurred during the gathering of the programme information"};
        res.send(JSON.stringify(error));
    })
}

exports.programme_info_by_id = function (req, res, next) {
    db.sequelize.query('SELECT Performance.performanceid, performancename_eng, performancename_fin, performancestarttime, performanceendtime, performanceinfo_eng, performanceinfo_fin FROM Programme JOIN Performance ON Programme.performanceid = Performance.performanceid WHERE Programme.concertid = (:id)', {
        replacements: {id: req.params.concertid},
        type: db.sequelize.QueryTypes.SELECT
    })
    .then(infos => {
        res.status(200).send(JSON.stringify(infos));
    })
    .catch( err => {
        console.log(JSON.stringify(err));
        var error = {"error":"An error occurred during the gathering of the performance for this concert"};
        res.send(JSON.stringify(error));
    })
    
}