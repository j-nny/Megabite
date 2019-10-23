const express = require('express');
const router = express.Router();
const db = require("../database");

router.post('/', (req, res) => {
  res.render("login")

});

module.exports = router
