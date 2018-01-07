'use strict';

const router = require('express').Router();
module.exports = router;

router.get('/', function (req, res, next) {
    res.status(200);
});

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
  res.status(404).end();
});
