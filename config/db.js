// const mongoose = require('mongoose');
// const config = require('./config');
// mongoose.connect('mongodb+srv://admin:<admin>@test.ijzqf.mongodb.net/testDB?retryWrites=true&w=majority' , { useNewUrlParser: true  , useUnifiedTopology: true});

// const db = mongoose.connection;
// db.on('error' , console.error.bind(console, 'connection error'));
// db.once('open' , () => console.log('Conntected to database!'));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<admin>@test.ijzqf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});