// const env = process.env.NODE_ENV || 'development';

// const config = {
//     development: {
//         port: process.env.PORT || 3000,
//         dbURL: 'mongodb://localhost:27017/forum',
//         origin: ['http://localhost:5555', 'http://localhost:4200'],
//         SALT_ROUNDS : 10,
//     },
//     production: {
//         port: process.env.PORT || 80,
//         dbURL: process.env.DB_URL_CREDENTIALS,
//         origin: [],
//         SALT_ROUNDS : 10,
//     }
// };

// module.exports = config[env];


const config = {
    development: {
        PORT: 3000,
        SALT_ROUNDS: 10,
        origin : ['http://localhost:4200'],
    },
    production: {
        PORT: 80,
        SALT_ROUNDS: 10,
        origin : [],
    },
};


module.exports = config[process.env.NODE_ENV.trim()]