const mongoose = require('mongoose');
const config = require('./config');
mongoose.connect('mongodb+srv://admin:<admin>@test.ijzqf.mongodb.net/testDB?retryWrites=true&w=majority' , { useNewUrlParser: true  , useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error' , console.error.bind(console, 'connection error'));
db.once('open' , () => console.log('Conntected to database!'));