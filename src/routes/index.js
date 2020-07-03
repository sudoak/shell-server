const compileController = require('../controllers/compile')();

const routes = require('express').Router();

routes.get('/compile', compileController.compile);

routes.get('*', (req, res) => {
  res.redirect("http://google.com");
});

module.exports = routes;