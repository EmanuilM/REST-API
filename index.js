const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const config = require('./config/config');

require('./config/db');
require('./config/express')(app);



app.use(cors({
    origin: config.origin,
    credentials: true,
}))
app.use(router);


app.listen(3000 , () => console.log(`Server is listening on port 3000`));