const express = require('express');

const router = express.Router();

const { index } = require('./../src/controllers/indexController');

/* GET '/' */
router.route('/').get(
  index,
);

module.exports = router;
