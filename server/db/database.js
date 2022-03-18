// database.js

const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.PG_DATABASE || 'tffgodb',
                                process.env.PG_USER || 'ClownFish',
                                process.env.PG_PASSWORD || 'ClownMan',
                                {
                                    host: process.env.PG_HOST || 'localhost',
                                    port: process.env.PG_PORT || 5432,
                                    dialect: 'postgres',
                                    dialectOptions: {
                                        ssl: process.env.DB_SSL == "true"
                                    }
                                });

const Test_artist_data = sequelize.define('test_artist_data', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        }
    },
    {timestamps: false}
);

module.exports = {
    sequelize: sequelize,
    Test_artist_data: Test_artist_data
};