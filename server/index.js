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

const housesapi =  '/api/houses';

app.get('/api/houses',controller.getDb);
app.post('/api/houses', controller.addHouse);
app.delete('/api/houses/:id', controller.deleteHouse);

const PORT = 3018;
app.listen(PORT, () => {
    console.log(`listening on port, ${PORT}`);
})