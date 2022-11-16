const { Router } = require('express');

module.exports = Router()
  .get('/teapot', (req, res, next) => {
    res.status(418).send();
    next();
  })
  .get('/payment', (req, res, next) => {
    res.status(402).send();
    next();
  });
