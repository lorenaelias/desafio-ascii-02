const express = require('express');
const app = express();
const mongoose = require('mongoose');
Admin = mongoose.mongo.Admin;
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose 
 .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,   })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));

//routes
const deliveriesRoute = require('./routes/deliveries');
app.use('/deliveries', deliveriesRoute);

app.get('/', (req, res) => {
    res.send('Server on');
});

app.listen(3000);


module.exports = app;