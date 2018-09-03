

module.exports = {
    //read
    getDb(req, res) {
        const dbInstance = req.app.get('db');
        dbInstance.get_houses().then(houses => {
            res.status(200).send(houses);
        }).catch(err => 
            console.log('errorMessage: error getting house', err));

    },
    //create
    addHouse(req, res) {
        const dbInstance = req.app.get('db');
        const {name, address, city, stateName, zip} = req.body;
        dbInstance.add_houses({name, address, city, stateName, zip})
        .then(houses => {
            res.status(200).send(houses);
        }).catch(err => console.log('errorMessage: error creating house', err));
    },
    // delete
    deleteHouse(req, res) {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        dbInstance.delete_houses(+id)
        .then(houses => {res.status(200).send(houses)})
        .catch(err => console.log('errorMessage: error deleting house', err));
    }
};
