const express = require('express');
const app = express();
const router = require('./router');
const cors = require('cors');
const config = require('./config/config');
const path = require('path');



require('./config/db');
require('./config/express')(app);

console.log(process.env.NODE_ENV);
// app.use(express.static(process.cwd()+"/angular-src/dist/testMaterial/"));
app.use(express.static(path.join(__dirname , 'dist')))
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

console.log(`Current port is ${process.env.PORT}`)
app.listen(process.env.PORT , () => console.log(`Server is listening on port ${process.env.PORT}`));