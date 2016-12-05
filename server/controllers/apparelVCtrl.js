var app = require('./../index');
var db = app.get('db');

module.exports = {

  getItems: function(req, res, next) {
      db.get_apparel_products(function(err, product) {
          res.status(200).json(product);
      })
  }

}
