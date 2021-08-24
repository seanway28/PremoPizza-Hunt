const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

// Add the prefix of `/pizzas` to created in `pizza-routes.js`
router.use('comments, commentRoutes');
router.use('/pizzaRoutes');



module.exports = router;