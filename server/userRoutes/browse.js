const express = require('express');
const router = express.Router();
const db = require("../database");

router.get('/', (req, res) => {
  db.populateSideBar()
  .then(res => {
    if (res){
      return res.rows;
    }
    else {
      return null;
    }
  })
  .then(data => { console.log(data);
  res.render("user_search", {data})})
  .catch(err => console.error('query error', err.stack));
});

module.exports = router;
