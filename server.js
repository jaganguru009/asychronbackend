const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const appRoot = require('app-root-path');
var cors = require('cors');


const HTTP_PORT = 80;
const HTTPS_PORT = 443;

const app = express();
app.use(cors())

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '500mb', parameterLimit: 100000 }));
// app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('public'));

const a = false;

mongoose
  .connect(
    'mongodb+srv://sa:Reset123@asychrondb.ctra5.mongodb.net/asychronDB?retryWrites=true&w=majority',
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      keepAlive: true,
    },
  )
  .then(() => {
    console.log('connection is succesfully connect ');
  })
  .catch((e) => {
    console.log(`no connection${e}`);
  });

// logger.info(JSON.stringify(process.env, null, 2))

// route requests by URI root
app.use('/api', require('./_api/routes'));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(process.env.PORT || 3000);
module.exports = app;
