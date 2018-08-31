require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require('massive');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('database is connected')
    app.set('db', database)
})

const PORT = 3018;
app.listen(PORT, () => {
    console.log(`listening on port, ${PORT}`);
})