// req.params.id

var app = require('./../index');
var db = app.get('db');

module.exports = {

    //pull product from database to give cart info//

    getItem: function(req, res, next) {
        // var products = req.body;

        db.get_cart_product([req.params.id], function(err, product) {
            res.status(200).json(product);
        });
    }

};
