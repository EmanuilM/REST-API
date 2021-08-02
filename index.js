const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const config = require('./config/config');
const path = require('path');

const allowed = [
    ".js",
    ".css",
    ".png",
    ".jpg"
];

require('./config/db');
require('./config/express')(app);
require('./config/cloudinary')();

app.use(express.static(path.join(__dirname, 'dist/client')));
app.use(cors({
    origin: config.origin,
    credentials: true,
}))
app.use(router);



app.get("*", (req, res) => {
    if (allowed.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`client/dist/client/${req.url}`));
    } else {
        res.sendFile(path.join(__dirname, "client/dist/client/index.html"));
    }
});




app.listen(config.PORT , () => console.log(`Server is listening on port ${config.PORT}`));