const config = {
    development: {
        PORT: process.env.PORT || 3000,
        origin: ['http://localhost:5555', 'http://localhost:4200'],
        DB_CONNECTION : 'mongodb://localhost:27017/AutoSales',
        SALT_ROUNDS : 10,
        SECRET_WORD : 'WEBTOKEN',
        COOKIE_NAME : "SESSION_TOKEN",
        CLOUD_NAME: "dtdz0i6at",
        CLOUDINARY_API_KEY: "936923232219936",
        CLOUDINARY_API_SECRET: "16BRo4xqGmyhx7TJbPoAb3hA6Mc",
    },
    production: {
        PORT: process.env.PORT || 80,
    }
};

module.exports = config[process.env.NODE_ENV.trim()];

