const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        origin: ['http://localhost:5555', 'http://localhost:4200'],
        DB_CONNECTION : 'mongodb://localhost:27017/CarSite',
        SALT_ROUNDS : 10,
    },
    production: {
        port: process.env.PORT || 80,
        origin: [],
        DB_CONNECTION : null,
        SALT_ROUNDS : 10,
    }
};

module.exports = config[env.trim()];



