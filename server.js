const express = require('express');
const assert = require('assert');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const proRoute = require('./route');
const config = require('./config/db');
const PORT = Number(process.env.PORT || 3000)

const app = express();

//body-parser
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// set the global promise for mongoose
mongoose.Promise = global.Promise;

//db connection

mongoose.connect(config.DB , {useNewUrlParser : true, useUnifiedTopology : true})
.then(res => {
    console.log("Database connected");
})
.catch(err => {
    assert.equal(null, err);
});

app.use(cors());
app.use('/', proRoute);

app.listen(PORT, () => {
    console.log('Server is running');
})
