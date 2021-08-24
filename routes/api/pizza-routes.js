const router = require('express').Router();

const {
    getAllPizza,
    getPizzaById,
    createPizza,
    updatePizza,
    deletePizza,
} = require('../../controllers/pizza-controller');

// Setup GET all and POST at /api/routes
router
        .route('/')
        .get(getAllPizza)
        .post(createPizza);

// Setup GET one, PUT and DELETE at /api/pizzas/:Id
router
        .route('/:Id')
        .get(getAllPizza)
        .put(updatePizza)
        .delete(deletePizza);

module.exports = router;