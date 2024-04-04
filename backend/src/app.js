const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PORT } = require('./config/env');
const { connect } = require('./config/database.connection.js');

const questionsRoute = require('./api/routes/questionsRoute.js')

const app = express();

app.use(cors());
app.use(bodyParser.json());



//endpoints
app.use('/api/v1/questions', questionsRoute)


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)

    //database connection
    connect()
})