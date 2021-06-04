const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const config = require('./config/config');




require('dotenv').config();
require('./config/db');
require('./config/express')(app);


console.log(process.env.NODE_ENV);


app.use(cors({
    origin: config.origin,
    credentials: true,
}))
app.use(router);


app.listen(config.PORT , () => console.log(`Server is listening on port ${config.PORT}`));