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
    let templateVar = { user: req.session.user_id, data: data }
    res.render("menu", templateVar);
  })
  .catch(err => console.error(err));
});

module.exports = router;
