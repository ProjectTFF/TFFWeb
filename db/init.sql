--tables

CREATE TABLE IF NOT EXISTS artist (
    artistid SERIAL,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    biography_eng VARCHAR(30),
    biography_fin VARCHAR(30),
    PRIMARY KEY (artistid)
    );

CREATE TABLE IF NOT EXISTS links (
    linkid SERIAL,
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
    photoid SERIAL,
    artistid INT NOT NULL,
    photoref VARCHAR(25),
    PRIMARY KEY (artistid, photoref),
    FOREIGN KEY (artistid) REFERENCES artist
);

CREATE TABLE IF NOT EXISTS composition (
    compositionid SERIAL,
    compositionname VARCHAR(50) NOT NULL,
    composer VARCHAR(50),
    compositioninfo_eng VARCHAR(25),
    compositioninfo_fin VARCHAR(25),
    PRIMARY KEY (compositionid)
);

CREATE TABLE IF NOT EXISTS venue (
    venueid SERIAL,
    venuename VARCHAR(30),
    venueaddress VARCHAR(50),
    venuecity VARCHAR(20),
    venuezipcode NUMERIC(5),
    venueinfo_eng VARCHAR(20),
    venueinfo_fin VARCHAR(20),
    PRIMARY KEY (venueid)
);

CREATE TABLE IF NOT EXISTS concert (
    concertid SERIAL,
    concertname VARCHAR(50),
    concertdate DATE NOT NULL,
    consertstarttime TIME NOT NULL,
    concertinfo_eng VARCHAR(20),
    concertinfo_fin VARCHAR(20),
    venueid INT NOT NULL,
    PRIMARY KEY (concertid),
    FOREIGN KEY (venueid) REFERENCES venue
);

CREATE TABLE IF NOT EXISTS programme (
    concertid INT NOT NULL,
    artistid INT NOT NULL,
    compositionid INT NOT NULL,
    performancetime TIME,
    PRIMARY KEY (concertid, artistid, compositionid, performancetime),
    FOREIGN key (concertid) REFERENCES concert,
    FOREIGN KEY (artistid) REFERENCES artist,
    FOREIGN KEY (compositionid) REFERENCES composition
);

--artists actual data

INSERT INTO ARTIST (artistid, firstname, lastname, biography_eng, biography_fin) 
VALUES 
    (default, 'Astrid', 'Bjelland', 'astridbelland_eng', 'astridbelland_fin'),
    (default, 'Fabian', 'Egger', 'fabianegger_eng', 'fabianegger_fin'),
    (default, 'Sébastian', 'Jacot', 'sebastianjacot_eng', 'sebastianjacot_fin'),
    (default, 'Annaleena', 'Jämsä', 'annaleenajamsa_eng', 'annaleenajamsa_fin'),
    (default, 'Johanna', 'Kärkkäinen', 'johannakarkkainen_eng', 'johannakarkkainen_fin'),
    (default, 'Alexis', 'Roman', 'alexisroman_eng', 'alexisroman_fin'),
    (default, 'Beatriz', 'Macias', 'beatrizmacias_eng', 'beatrizmacias_fin'),
    (default, 'Jenny', 'Villanen', 'jennyvillanen_eng', 'jennyvillanen_fin'),
    (default, 'Malla','Vivolin', 'mallavivolin_eng', 'mallavivolin_fin');

--artist links actual data

/*artist should have an entry here even if there is not a single link to 
prevent confusion about were they left out intentionally or by accident
*/

INSERT INTO links (linkid, website, facebook, youtube, instagram, spotify, artistid)
VALUES
    (default, NULL, 'https://www.facebook.com/astrid.bjelland', 'https://www.youtube.com/user/Oeyliv', 'https://www.instagram.com/astridbjel/', NULL, 1),
    (default, NULL, NULL, NULL, NULL, NULL, 2),
    (default, 'https://www.sebastianjacot.com/', 'https://www.facebook.com/sebastian.jacot', 'https://www.youtube.com/user/MrSbas1208', 'https://www.instagram.com/jacotsebastian/', 'https://open.spotify.com/artist/4eCf3HTuUFAdvm7a4fu9MB', 3),
    (default, NULL, 'https://www.facebook.com/annaleena.puhto', NULL, 'https://www.instagram.com/annaleenamaaria/', NULL, 4),
    (default, 'https://www.johannakarkkainen.com/en/', 'https://www.facebook.com/JohannakarkkainenArtist/', 'https://www.youtube.com/watch?v=RI2z95Z-R_M', 'https://www.instagram.com/johannak_artist/', NULL, 5),
    (default, NULL, 'https://www.facebook.com/alexis.roman.5011', 'https://www.youtube.com/channel/UCijDgzHwxGfWyV-CAr-KGGA', 'https://www.instagram.com/alexis_roman_flutist/', 'https://open.spotify.com/artist/2YeDwmQ2hRVzNtGfMe78zp', 6),
    (default, 'www.beatrizmacias.com', 'https://www.facebook.com/beatriz.macias.58152/', 'https://www.youtube.com/channel/UCeCGeIztVZ-UNr_NXhox1hQ', 'https://www.instagram.com/beatrizmaciasflutist/', NULL, 7),
    (default, NULL,'https://www.facebook.com/jenny.villanen' , NULL, 'https://www.instagram.com/jennyvillanen/', NULL, 8),
    (default, 'https://www.mallavivolin.com/', 'https://www.facebook.com/kuutiomeduusa', 'https://www.youtube.com/watch?v=BC1lpARg04w','https://www.instagram.com/jumihiutale/', NULL , 9);

--venues actual data

INSERT INTO VENUE (venueid, venuename, venueaddress, venuecity, venuezipcode, venueinfo_eng, venueinfo_fin)
VALUES
    (default, 'Tampere-Talo','Yliopistonkatu 55', 'Tampere', '33101', 'tamperetaloinfo_eng', 'tamperetaloinfo_fin');

--compositions dummy data

INSERT INTO composition (compositionid, compositionname, composer, compositioninfo_eng, compositioninfo_fin)
VALUES
    (default, 'Composition1', 'composer1', 'composition1_eng', 'composition1_fin'),
    (default, 'Composition2', 'composer2', 'composition2_eng', 'composition2_fin'),
    (default, 'Composition3', 'composer3', 'composition3_eng', 'composition3_fin');

--concerts dummy data

INSERT INTO concert (concertid, concertname, concertdate, consertstarttime, concertinfo_eng, concertinfo_fin, venueid)
VALUES
    (default, 'Concert1', '2022-03-20', '19:00', 'concert1info_eng', 'concert1info_fin', 1),
    (default, 'Concert2', '2022-03-24', '18:30', 'concert2info_eng', 'concert2info_fin', 1),
    (default, 'Concert3', '2022-03-22', '19:15', 'concert3info_eng', 'concert3info_fin', 1),
    (default, 'Concert4', '2022-05-10', '14:00', 'concert4info_eng', 'concert4info_fin', 1);

-- programme dummy data

INSERT INTO programme (concertid, artistid, compositionid, performancetime)
VALUES
    (1, 2, 1, '19:00'),
    (1, 4, 3, '19:30'),
    (1, 3, 3, '19:30'),
    (1, 5, 2, '19:30'),

    (2, 1, 1, '19:30'),
    (2, 1, 2, '19:30'),
    (2, 3, 3, '19:30'),

    (3, 1, 1, '19:30'),
    (3, 2, 3, '19:30'),
    (3, 3, 2, '19:30');