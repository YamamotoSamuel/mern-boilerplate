const express = require('express');
const Country = require('../models/Country')

const router = express.Router();

// Route to get all countries
router.get('/', (req, res, next) => {
  Country.find()
    .then(countries => {
      res.json(countries);
    })
    .catch(err => next(err))
});

// Route to add a country
router.post('/', (req, res, next) => {
  let { name, capitals, area, description } = req.body
  Country.create({ name, capitals, area, description })
    .then(country => {
      res.json({
        success: true,
        country
      });
    })
    .catch(err => next(err))
});

// Route to add an Event
router.post('/', (req, res, next) => {
  let {eventName, city, tse, actualSpend, siteLead, quarter} = req.body
  Event.create({eventName, city, tse, actualSpend, siteLead, quarter})
  .then(event => {
    res.json({
      success:true,
      event
    });
  })
  .catch(err => next(err))
});

// Route to get all events
router.get('/', (req, res, next) => {
  Event.find()
    .then(events => {
      res.json(events);
    })
    .catch(err => next(err))
});

module.exports = router;
