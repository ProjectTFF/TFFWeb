// database.js

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
            allowNull: true
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

// Here we export the Artist model definition for use outside this file.
module.exports = {
    sequelize: sequelize,
    Artist: Artist
};