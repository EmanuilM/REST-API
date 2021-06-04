const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        origin: ['http://localhost:5555', 'http://localhost:4200'],
        SALT_ROUNDS : 10,
    },
    production: {
        port: process.env.PORT || 80,
        origin: [],
        SALT_ROUNDS : 10,
    }
};

module.exports = config[env];



