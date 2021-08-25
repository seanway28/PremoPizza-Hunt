const { pizza, Pizza } = require('../models');
const pizzaController = {
    getAllPizza(req, res) {
        Pizza.find({})
        .populate({
            path: 'comments',
            select: '-_v'
        })
        .select('-_v')
        .sort({ _id: -1 })
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
    },

    //Get one Pizza by Id
    getPizzaById({  params }, res) {
        Pizza.findOne({ _id: params.id })
        .populate({
            path: 'comment',
            select: '-_v'
        })
        .select('-_v')
        .then(dbPizzaData => {
            // If no pizza is found send (404)
            if (!dbPizzaData) {
                res.status(404).json({ message: 'No pizza found with this Id.'});
                return;
            }
            res.json(dbPizzaData);
        });
    },

    // Create Pizza
    createPizza({ body }, res) {
        Pizza.create(body)
        .then(dbPizzaData => res.json(dbPizzaData))
        .catch(err => res.status(400).json(err));
    },

    // Update Pizza
    updatePizza({ params, body }, res) {
        Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbPizzaData => {
            if(!dbPizzaData) {
                res.status(404).json({ message: 'No pizza found with this Id.'});
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err));
    },
    // Delete Pizza
    deletePizza({ params }, res) {
        Pizza.findOneAndDelete({ _id: params.id })
        .then(dbPizzaData => {
            if(!dbPizzaData) {
                res.status(404).json({ message: 'No pizza found with this Id' })
                return;
            }
            res.json(dbPizzaData);
        })
        .catch(err => res.status(400).json(err))
    }
};

module.exports = pizzaController;