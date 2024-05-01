require('dotenv').config();

const express = require('express');
const logger = require('morgan');

require('./configs/db.config');

const app = express();

app.use(logger('dev'));

const port = 3000;
app.listen(port, () => console.info(`Application runnig at port ${port}`))

