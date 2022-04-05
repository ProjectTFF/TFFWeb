\c postgres
DROP DATABASE IF EXISTS tffgodb;
CREATE DATABASE tffgodb;
\c tffgodb

CREATE TABLE IF NOT EXISTS artist (
    artistid INT NOT NULL,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    biography_eng VARCHAR(30),
    biography_fin VARCHAR(30),
    PRIMARY KEY (artistid)
    );

CREATE TABLE IF NOT EXISTS links (
    linkid INT NOT NULL,
    website VARCHAR(50),
    facebook VARCHAR(50),
    youtube VARCHAR(100),
    instagram VARCHAR(50),
    spotify VARCHAR(100),
    artistid INT NOT NULL,
    PRIMARY KEY (linkid, artistid),
    FOREIGN KEY (artistid) REFERENCES artist
 );

CREATE TABLE IF NOT EXISTS photos (
    photoid INT NOT NULL,
    artistid INT NOT NULL,
    photoref VARCHAR(25),
    PRIMARY KEY (artistid, photoref),
    FOREIGN KEY (artistid) REFERENCES artist
);

CREATE TABLE IF NOT EXISTS performance (
    performanceid INT NOT NULL,
    performancename_eng VARCHAR(100) NOT NULL,
    performancename_fin VARCHAR(100) NOT NULL,
    performanceinfo_eng VARCHAR(25),
    performanceinfo_fin VARCHAR(25),
    PRIMARY KEY (performanceid)
);

CREATE TABLE IF NOT EXISTS performsin (
   artistid INT,
   performanceid INT,
   PRIMARY KEY (artistid, performanceid),
   FOREIGN KEY (artistid) REFERENCES artist,
   FOREIGN KEY (performanceid) REFERENCES performance
);


CREATE TABLE IF NOT EXISTS venue (
    venueid INT NOT NULL,
    venuename VARCHAR(30),
    venueaddress VARCHAR(50),
    venuecity VARCHAR(20),
    venuezipcode INT,
    venuelink VARCHAR(50),
    venuelocation VARCHAR(100),
    PRIMARY KEY (venueid)
);

CREATE TABLE IF NOT EXISTS concert (
    concertid INT NOT NULL,
    concertname VARCHAR(50),
    concertdate DATE NOT NULL,
    consertstarttime TIME NOT NULL,
    concertendtime TIME,
    concertinfo_eng VARCHAR(20),
    concertinfo_fin VARCHAR(20),
    venueid INT NOT NULL,
    PRIMARY KEY (concertid),
    FOREIGN KEY (venueid) REFERENCES venue
);

CREATE TABLE IF NOT EXISTS programme (
    concertid INT NOT NULL,
    performanceid INT NOT NULL,
    performancestarttime TIME NOT NULL,
    performanceendtime TIME,
    PRIMARY KEY (concertid, performanceid, performancestarttime),
    FOREIGN key (concertid) REFERENCES concert,
    FOREIGN KEY (performanceid) REFERENCES performance
);

--artists data

INSERT INTO ARTIST (artistid, firstname, lastname, biography_eng, biography_fin) 
VALUES 
    (1, 'Astrid', 'Bjelland', 'astridbjelland_eng.txt', 'astridbjelland_fin.txt'),
    (2, 'Fabian', 'Egger', 'fabianegger_eng.txt', 'fabianegger_fin.txt'),
    (3, 'Sébastian', 'Jacot', 'sebastianjacot_eng.txt', 'sebastianjacot_fin.txt'),
    (4, 'Annaleena', 'Jämsä', 'annaleenajamsa_eng.txt', 'annaleenajamsa_fin.txt'),
    (5, 'Johanna', 'Kärkkäinen', 'johannakarkkainen_eng.txt', 'johannakarkkainen_fin.txt'),
    (6, 'Alexis', 'Roman', 'alexisroman_eng.txt', 'alexisroman_fin.txt'),
    (7, 'Beatriz', 'Macias', 'beatrizmacias_eng.txt', 'beatrizmacias_fin.txt'),
    (8, 'Jenny', 'Villanen', 'jennyvillanen_eng.txt', 'jennyvillanen_fin.txt'),
    (9, 'Malla','Vivolin', 'mallavivolin_eng.txt', 'mallavivolin_fin.txt'),
    (10, 'Eva', 'Alkula', 'evaalkula_eng.txt', 'evaalkula_fin.txt'),
    (11, 'Hanna-Leena', 'Savolainen', 'hannaleenasavolainen_eng.txt', 'hannaleenasavolainen_fin.txt'),
    (12, 'Viktor', 'Pellia', 'viktorpellia_eng.txt', 'viktorpellia_fin.txt');

--artist links actual data

/*artist should have an entry here even if there is not a single link to 
prevent confusion about were they left out intentionally or by accident
*/

INSERT INTO links (linkid, website, facebook, youtube, instagram, spotify, artistid)
VALUES
    (1, NULL, 'https://www.facebook.com/astrid.bjelland', 'https://www.youtube.com/user/Oeyliv', 'https://www.instagram.com/astridbjel/', NULL, 1),
    (2, NULL, NULL, NULL, NULL, NULL, 2),
    (3, 'https://www.sebastianjacot.com/', 'https://www.facebook.com/sebastian.jacot', 'https://www.youtube.com/user/MrSbas1208', 'https://www.instagram.com/jacotsebastian/', 'https://open.spotify.com/artist/4eCf3HTuUFAdvm7a4fu9MB', 3),
    (4, NULL, 'https://www.facebook.com/annaleena.puhto', NULL, 'https://www.instagram.com/annaleenamaaria/', NULL, 4),
    (5, 'https://www.johannakarkkainen.com/en/', 'https://www.facebook.com/JohannakarkkainenArtist/', 'https://www.youtube.com/watch?v=RI2z95Z-R_M', 'https://www.instagram.com/johannak_artist/', NULL, 5),
    (6, NULL, 'https://www.facebook.com/alexis.roman.5011', 'https://www.youtube.com/channel/UCijDgzHwxGfWyV-CAr-KGGA', 'https://www.instagram.com/alexis_roman_flutist/', 'https://open.spotify.com/artist/2YeDwmQ2hRVzNtGfMe78zp', 6),
    (7, 'www.beatrizmacias.com', 'https://www.facebook.com/beatriz.macias.58152/', 'https://www.youtube.com/channel/UCeCGeIztVZ-UNr_NXhox1hQ', 'https://www.instagram.com/beatrizmaciasflutist/', NULL, 7),
    (8, NULL,'https://www.facebook.com/jenny.villanen' , NULL, 'https://www.instagram.com/jennyvillanen/', NULL, 8),
    (9, 'https://www.mallavivolin.com/', 'https://www.facebook.com/kuutiomeduusa', 'https://www.youtube.com/watch?v=BC1lpARg04w','https://www.instagram.com/jumihiutale/', NULL , 9),
    (10, 'http://www.evaalkula.com/musiikki-1', 'https://www.facebook.com/alkulaeva', 'https://www.youtube.com/watch?v=q6IbBFU1zgE','https://www.facebook.com/alkulaeva/', 'https://open.spotify.com/artist/6Bs5O9Ssp2A6JHxhu6nV24 ', 10),
    (11, NULL, 'https://www.facebook.com/hannaleena.savolainen', NULL, NULL, NULL, 11),
    (12, NULL, 'https://www.facebook.com/Piktor4ik','https://www.youtube.com/watch?v=dce0D3bEj9M','https://www.instagram.com/viktor_pellia/?hl=en', NULL, 12);

--artist photos actual data
INSERT INTO photos (photoid,artistid,photoref)
VALUES
    (1,1,'astrid_bjelland.png'),
    (2,2,'fabian_egger.png'),
    (3,3,'sebastian_jacot.png'),
    (4,4,'hannaleena_savolainen.png'),
    (5,5,'johanna_karkkainen.png'),
    (6,6,'alexis_roman.png'),
    (7,7,'beatirz_macias.png'),
    (8,8,'jenny_villanen.png'),
    (9,9,'malla_vivolin.png'),
    (10,10,'eva_alkula.png'),
    (11,11,'hannaleena_savolainen.png'),
    (12,12,'Viktor_Pellia.png');


--venues data

INSERT INTO VENUE (venueid, venuename, venueaddress, venuecity, venuezipcode, venuelink, venuelocation )
VALUES
    (1, 'Tampere-Talo','Yliopistonkatu 55', 'Tampere', 33101, 'http://www.tampere-talo.fi/', 'https://goo.gl/maps/x8ymf7FRWrUGRi6AA'),
    (2, 'Kulttuuritalo Laikku', 'Keskustori 4', 'Tampere', 33100, 'https://www.laikku.fi', 'https://goo.gl/maps/EqoRQy3G4Rww1H7T8'),
    (3, 'Tampereen konservatorio', 'F.E. Sillanpään katu 9', 'Tampere', 33230, 'https://www.tampereenkonservatorio.fi/', 'https://g.page/kulttuuritalolaikku?share');

--performances data

INSERT INTO performance (performanceid, performancename_eng, performancename_fin, performanceinfo_eng, performanceinfo_fin)
VALUES

--The kids' concert performances. The same event three times with the only difference being the language. Also no performers mentioned.
    (1, 'In Finnish', 'Suomeksi', NULL, NULL),
    (2, 'In Finnish', 'Suomeksi', NULL, NULL),
    (3, 'In English', 'Englanniksi', NULL, NULL),

--TFF Youth performances

    (4, 'Inside the French School - Warm Up', 'Inside the French School - lämmittely', 'sat1eng.txt', 'sat1fin.txt'),
    (5, 'Masterclass: Sébastian Jacot', 'Mestarikurssi: Sébastian Jacot', 'sat2eng.txt', 'sat2fin.txt'),
    (7, 'Recital: Piccolo Variations - Jenny Villanen', 'Resitaali: Piccolo Variations - Jenny Vilanen', 'sat4eng.txt', 'sat4fin.txt'),
    (8, 'Masterclass: Jenny Villanen', 'Mestarikurssi: Jenny Villanen', 'sat5eng.txt', 'sat5fin.txt'),
    (10, 'Recital: Young Talent -Fabian Egger', 'Resitaali: Young Talent -Fabian Egger', 'sat7eng.txt', 'sat7fin.txt'),
    (11, 'Recital: An American in Paris - Beatriz Macías and Alexis Roman', 'Resitaali: An American in Paris - Beatriz Macías and Alexis Roman', 'sat8eng.txt', 'sat8fin.txt'),

--Gala concert performances

    (12, '2022 Young Artist Competition Finals', 'Young Artist 2022 -kilpailun finaali', 'sun1eng.txt', 'sun1fin.txt'),
    (13, 'Recital: New Generations - Astrid Bjelland', 'Resitaali: New Generations - Astrid Bjelland', 'sun2eng.txt', 'sun2fin.txt'),
    (14, 'Masterclass: Sébastian Jacot', 'Mestarikurssi: Sébastian Jacot', 'sun3eng.txt', 'sun3fin.txt'),
    (15, 'Recital: La flute enchantée - Sébastian Jacot', 'Resitaali: La flute enchantée - Sébastian Jacot', 'sun4eng.txt', 'sun4fin.txt'),
    (16, 'Panel Discussion: In the Spotlight!', 'Paneelikeskustelu: Valokeilassa!', 'sun5eng.txt', 'sun5fin.txt'),
    (17, 'JÄÄ//ICE Gala Concert', 'JÄÄ//ICE - Gaalakonsertti', 'sun6eng.txt', 'sun6fin.txt');

--concerts data

INSERT INTO concert (concertid, concertname, concertdate, consertstarttime, concertendtime, concertinfo_eng, concertinfo_fin, venueid)
VALUES
    (1, 'TFF Kids', '2022-04-22', '10:00','13:00','tffkids_eng.txt', 'tffkids_fin.txt', 2),
    (2, 'TFF Youth', '2022-04-23', '10:00','18:40', 'tffyouth_eng.txt', 'tffyouth_fin.txt', 3),
    (3, 'TFF JÄÄ//ICE', '2022-04-24', '10:00','20:00', 'tffice_eng.txt', 'tffice_fin.txt', 1);

-- programme data

INSERT INTO programme (concertid, performanceid, performancestarttime, performanceendtime)
VALUES  
    (1, 1, '10:00','11:00'),
    (1, 2, '11:00','12:00'),
    (1, 3, '12:00','13:00'),

    (2, 4, '10:00,', '10:20'),
    (2, 5, '10:30', '12:00'),
    (2, 7, '12:30', '13:00'),
    (2, 8, '13:45', '15:45'),
    (2, 10, '16:00', '16:40'),
    (2, 11, '18:00', '18:40'),

    (3, 12, '10:00', '12:30'),
    (3, 13, '13:00', '13:40'),
    (3, 14, '14:00', '15:00'),
    (3, 15, '15:15', '16:00'),
    (3, 16, '16:15', '17:15'),
    (3, 17, '18:30', '20:00');


--The through table for connecting artist to performances

INSERT INTO performsin (artistid, performanceid)
VALUES
    (6, 4),
    (3, 5),
    (3, 14),
    (3, 15),
    (8, 7),
    (8, 8),
    (2, 10),
    (6, 11),
    (7, 11),
    (1, 13),
    (12, 7),
    (11, 10),
    (12, 11),
    (12, 13),
    (12, 15),
    (3 ,16),
    (6, 16),
    (7, 16),
    (8, 16),
    (4, 17),
    (5, 17),
    (8, 17),
    (9, 17),
    (10, 17),
    (11, 17);