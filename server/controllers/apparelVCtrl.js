var app = require('./../index');
var db = app.get('db');

module.exports = {

    getItems: function(req, res, next) {
        db.get_apparel_products(function(err, products) {

            if (err) {
                return res.status(401).send(err);
            }

            function async(i) {
                if (i >= products.length) {
                    return fin();
                }

                db.get_colors([products[i].id], function(err, colors) {
                    if (err) {
                        return res.status(401).send(err);
                    }
                    products[i].colors = colors;
                    async(i + 1);
                })
            }
            async(0);

            function fin() {
                res.status(200).send(products);
            }
        })
    }

};
