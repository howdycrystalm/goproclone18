var app = require('./../index');
var db = app.get('db');

module.exports = {

  getProduct: function(req, res, next) {
    db.get_product_by_id([req.params.id, req.params.gender], function(err, product) {

      if (err) {

        return res.status(401).send(err);

      }

      res.status(200).json(product);
    })
  }
}
