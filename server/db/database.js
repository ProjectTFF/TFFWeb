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

// model for 'performance' table
const Performance = sequelize.define('performance', {
    performanceid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    performancename_eng: {
        type: Sequelize.STRING,
        allowNull: false
    },
    performancename_fin: {
        type: Sequelize.STRING,
        allowNull: false
    },
    performanceinfo_eng: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    performanceinfo_fin: {
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
    venuename_eng: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    venuename_fin: {
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
    venuelink: {
        type: Sequelize.STRING,
        allowNull: true
    },
    venuelocation: {
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
    concertname_eng: {
        type: Sequelize.STRING,
        allowNull: true
    },
    concertname_fin: {
        type: Sequelize.STRING,
        allowNull: true
    },
    concertdate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    consertstarttime: {
        type: Sequelize.TIME,
        allowNull: false
    },
    consertendtime: {
        type: Sequelize.TIME,
        allowNull: true
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
const Programme = sequelize.define('programme', {
    concertid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    performanceid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    performancestarttime: {
        type: Sequelize.TIME,
        allowNull: false,
        primaryKey: true
    },
    performanceendtime: {
        type: Sequelize.TIME,
        allowNull: true,
        primaryKey: true
    }
},

{timestamps: false,
freezeTableName:true}

);

// the table for connecting artist and performance
const Performsin = sequelize.define('performsin', {
    artistid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    performanceid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primarykey: true
    }

},

{timestamps: false,
freezeTableName: true,}
);

const VisitorLog = sequelize.define('visitorlog', {
    visitorid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
},
    {timestamps: true,
    createdAt: true,
    updatedAt: false,
    freezeTableName: true,}
);

// Here we export the Artist model definition for use outside this file.
module.exports = {
    sequelize: sequelize,
    Artist: Artist,
    Links: Links,
    Photos: Photos,
    Performance: Performance,
    Venue: Venue,
    Concert: Concert,
    Programme: Programme,
    Performsin: Performsin,
    VisitorLog: VisitorLog
};