const routes = require('express').Router();

routes.get('/compile', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

routes.get('*', (req, res) => {
  res.redirect("www.google.com");
});

module.exports = routes;