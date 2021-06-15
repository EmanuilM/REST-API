const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const config = require('./config/config');



require('./config/db');
require('./config/express')(app);

console.log(process.env.NODE_ENV);

app.use(cors({
    origin: config.origin,
    credentials: true,
}))
app.use(router);

console.log(`Current port is ${process.env.PORT}`)
app.listen(process.env.PORT , () => console.log(`Server is listening on port ${process.env.PORT}`));