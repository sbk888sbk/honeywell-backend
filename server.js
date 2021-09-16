const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./routes/mainRoutes.js')
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors())
app.use('/', routes)

app.listen(3001, () => {
    console.log(`App running on port 3001 ...`);
  });