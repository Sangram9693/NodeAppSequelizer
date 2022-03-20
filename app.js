const express = require('express');
const bodyParser = require('body-parser');
const students = require('./routers/StudentRouter');
const constants = require('./constants');
const dbConnection = require('./models');

const app = express();
const PORT = 4000;

/**
 * To delete existing table and re create table use below code
 * NOTE: It can use for development purpose
 * */
// dbConnection.sequelize.sync({ force: true }).then(() => {
//   console.log('Table droped and re synced successfully');
// });

dbConnection.sequelize.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Allowing CORS
 */
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-token, authorization');
  res.header('Access-Control-Expose-Headers', 'x-token, authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET, OPTION');
  next();
});

/**
 * APIs
 */
app.use(`/api/${constants.API_VESION_V1}/student`, students);

app.get('/test', (req, resp) => {
  resp.send('First Node App');
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`listening on *:${PORT}`);
});

module.exports = app;
