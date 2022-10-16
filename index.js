const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes');


const app = express();

app.use(express.json());
app.use('/api', routes);

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})