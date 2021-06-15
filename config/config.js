const config = {
    development: {
        PORT: process.env.PORT || 3000,
        origin: ['http://localhost:5555', 'http://localhost:4200'],
        DB_CONNECTION : 'mongodb://localhost:27017/CarSite',
        SALT_ROUNDS : 10,
        SECRET_WORD : 'WEBTOKEN',
    },
    production: {
        PORT: process.env.PORT || 80,
        origin: ['https://still-escarpment-20636.herokuapp.com/'],
        DB_CONNECTION : 'mongodb+srv://test:test@test.ijzqf.mongodb.net/testAtlas?retryWrites=true&w=majority',
        SALT_ROUNDS : 10,
        SECRET_WORD : null,
    }
};

module.exports = config[process.env.NODE_ENV.trim()];



