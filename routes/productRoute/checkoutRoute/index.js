const { checkoutProduct } = require('../../../controllers/checkoutController');


const checkoutRouter = require('express').Router();

checkoutRouter.route('/checkout').post(checkoutProduct);

module.exports = { checkoutRouter };