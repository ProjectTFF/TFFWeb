const {Performance, Concert, Programme, Venue, Artist, Performsin } = require('../db/database');
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
    db.sequelize.query('SELECT concertid, concertname_eng,concertname_fin, concertdate, Venue.venueid, venuename_eng, venuename_fin FROM Concert JOIN Venue ON Concert.venueid = Venue.venueid', {
        type: db.sequelize.QueryTypes.SELECT
      })
    .then(concerts => {
        concerts.map(concert => {
        if(parseInt(concert.concertid,10)==1)
        {
            concert.concertname_eng = 'TFF Kid';
            concert.concertname_fin = 'TFF Lapset';
        }
        else if(parseInt(concert.concertid,10)==2)
        {
            concert.concertname_eng = 'TFF Youth Morning Pass';
            concert.concertname_fin = 'TFF Nuoret Aamupassi';
        }
        else if(parseInt(concert.concertid,10)==3)
        {
            concert.concertname_eng = 'TFF Youth Lunch Pass';
            concert.concertname_fin = 'TFF Nuoret Lounaspassi';
        }
        else if(parseInt(concert.concertid,10)==4)
        {
            concert.concertname_eng = 'TFF Ice Morning Pass';
            concert.concertname_fin = 'TFF Jää Aamupassi';
        }
        else if(parseInt(concert.concertid,10)==5)
        {
            concert.concertname_eng = 'TFF Ice Lunch Pass';
            concert.concertname_fin = 'TFF Jää Lounaspassi';
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
        infos.map(performance => {
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

            if(performance.performanceinfo_eng != null)
            {
            var path = './text/eventinfos/';
            //remove the " character to have a proper link
            var find = '\"';
            var re = new RegExp(find, 'g');

            var file_eng = path.concat(JSON.stringify(performance.performanceinfo_eng)).replace(re,'');
            var file_fin = path.concat(JSON.stringify(performance.performanceinfo_fin)).replace(re,'');
            
            var buffer_eng = fs.readFileSync(file_eng);
            var buffer_fin = fs.readFileSync(file_fin);

            // use the toString() method to convert
            // Buffer into String
            var fileContent_eng = buffer_eng.toString();
            var fileContent_fin = buffer_fin.toString();

            performance.performanceinfo_eng = fileContent_eng;
            performance.performanceinfo_fin = fileContent_fin;
            }
        })
        res.status(200).send(JSON.stringify(infos));
    })
    .catch( err => {
        console.log(JSON.stringify(err));
        var error = {"error":"An error occurred during the gathering of the performance for this concert"};
        res.send(JSON.stringify(error));
    })
    
}

exports.artists_performance = function (req, res, next) {
    db.sequelize.query('SELECT Performsin.artistid, firstname, lastname FROM Performsin JOIN Artist ON Performsin.artistid = Artist.artistid WHERE Performsin.performanceid = (:id)', {
        replacements: {id: req.params.performanceid},
        type: db.sequelize.QueryTypes.SELECT
    })
    .then(artists => {
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
        if(artists.length === 0)
        {
            artists = [null];
        }
        res.status(200).send(JSON.stringify(artists));
    })
    .catch( err => {
        console.log(JSON.stringify(err));
        var error = {"error":"An error occurred during the gathering of the artists for this performance"};
        res.send(JSON.stringify(error));
    })
}