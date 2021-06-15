const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const config = require('./config/config');
const path = require('path');

// const port = process.env.port || 7030;

require('./config/db');
require('./config/express')(app);

console.log(process.env.NODE_ENV);
// app.use(express.static(process.cwd()+"/angular-src/dist/testMaterial/"));
app.use(express.static(path.join(__dirname , 'dist/testMaterial')))
app.use(cors({
    origin: config.origin,
    credentials: true,
}))
app.use(router);


// app.get('/', (req,res) => {
//     res.sendFile(process.cwd()+"/angular-src/dist/testMaterial/index.html");
//   });

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/testMaterial/index.html'));
  });

 console.log(config)
console.log(`Current port is ${config.PORT}`);
app.listen(config.PORT , () => console.log(`Server is listening on port ${config.PORT}`));