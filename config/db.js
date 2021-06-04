const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION_LINK , { useNewUrlParser: true  , useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error' , console.error.bind(console, 'connection error'));
db.once('open' , () => console.log('Conntected to database!'));