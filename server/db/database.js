// database.js

const { useColors } = require('debug/src/browser');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PGDATABASE || 'WrongDb',
                                process.env.PGUSER || 'WrongUser',
                                process.env.PGPASSWORD || 'WrongPass',
                                {
                                    host: process.env.PGHOST || 'WronHost',
                                    port: process.env.PGPORT || 99999999,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });

// Here is a model for 'artist' table, which defines the column data types.
const Artist = sequelize.define('artist', {
        artistid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        biography_eng: {
            type: Sequelize.STRING,
            allowNull: false
        },
        biography_fin: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },

    {timestamps: false,
    freezeTableName: true,}
);

// model for 'links' table 
const Links = sequelize.define('links', {
    linkid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    website: {
        type: Sequelize.STRING,
        allowNull: true
    },
    facebook: {
        type: Sequelize.STRING,
        allowNull: true
    },
    youtube: {
        type: Sequelize.STRING,
        allowNull: true
    },
    instagram: {
        type: Sequelize.STRING,
        allowNull: true
    },
    spotify: {
        type: Sequelize.STRING,
        allowNull: true
    },
    artistid: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

},
{timestamps: false,
freezeTableName: true,}
);

// model for 'photos' table
const Photos = sequelize.define('photos', {
    photoid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    artistid: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    photoref: {
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
},

{timestamps: false,
freezeTableName: true,}
);

   // model for 'composition' table
const Composition = sequelize.define('composition', {
    compositionid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    compositionname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    composer: {
        type: Sequelize.STRING,
        allowNull: true
    },
    compositioninfo_eng: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    compositioninfo_fin: {
        type: Sequelize.STRING,
        allowNull: true

    }
},

    {timestamps:false,
    freezeTableName: true,}
);

// model for 'venue' table
const Venue = sequelize.define('venue', {
    venueid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    venuename: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    venueaddress: {
        type: Sequelize.STRING,
        allowNull: true
    },
    venuecity: {
        type: Sequelize.STRING,
        allowNull: true
    },
    venuezipcode: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    venueinfo_eng: {
        type: Sequelize.STRING,
        allowNull: true
    },
    venueinfo_fin: {
        type: Sequelize.STRING,
        allowNull: true
    }
},

    {timestamps:false,
    freezeTableName:true,}
);

// model for 'concert' table
const Concert = sequelize.define('concert', {
    concertid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    concertname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    concertdate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    consertstarttime: {
        type: Sequelize.TIME,
        allowNull: false
    },
    consertinfo_eng: {
        type: Sequelize.STRING,
        allowNull: true
    },
    concertinfo_fin: {
        type: Sequelize.STRING,
        allowNull: true
    },
    venueid: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},

{timestamps: false,
freezeTableName: true}
);

// model for the 'programme' table

const Programme = sequelize.define('concert', {
    concertid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    artistid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    compositionid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    performanceorder: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }
},

{timestamps: false,
freezeTableName:true}

);

// relationships between tables

Artist.hasOne(Links);
Links.belongsTo(Artist);

Artist.hasMany(Photos);
Photos.belongsTo(Artist);

Venue.hasMany(Concert);
Concert.hasOne(Venue);

//Programme.hasMany(Artist);
//Artist.belongsTo(Programme);

Programme.hasMany(Composition);
Composition.belongsTo(Programme);

Concert.belongsTo(Programme);
Programme.hasMany(Concert);

// Here we export the Artist model definition for use outside this file.
module.exports = {
    sequelize: sequelize,
    Artist: Artist,
    Links: Links,
    Photos: Photos,
    Composition: Composition,
    Venue: Venue,
    Concert: Concert,
    Programme: Programme
}; 