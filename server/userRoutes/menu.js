const express = require('express');
const router = express.Router();
const db = require("../database");

router.get('/', (req, res) => {
  db.getMenu()
  .then(res => {
    if (res) {
      return res.rows;
    } else {
      return null;
    };
  })
  .then(data => {
    console.log({data});
    res.render("menu", {data});
  })
  .catch(err => console.error(err));
});

module.exports = router;
