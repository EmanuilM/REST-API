const express = require('express');
const app = express();
const router = require('./router');

require('./config/db');
require('./config/express')(app);

app.use(router);


app.listen(3000 , () => console.log(`Server is listening on port 3000`));