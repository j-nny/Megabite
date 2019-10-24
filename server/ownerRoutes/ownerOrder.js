const express = require('express');
const router = express.Router();
const db = require("../database");

router.get('/', (req, res) => {
  res.render("ownerOrder");
});

router.post('/', (req, res) => {
  res.render("ownerOrder");
  // query to make order active false
});

module.exports = router;
