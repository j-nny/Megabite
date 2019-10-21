const express = require('express');
const router = express.Router();
const db = require("../database");

router.get('/', (req, res) => {
  // console.log("browse");
  let results = [];
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
  // console.log(resultArray);
  // res.render("user_search");
});

module.exports = router;
