const express = require('express');
const router = express.Router();
const db = require("../database");

router.get('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  }
  db.populateSideBar()
  .then(res => {
    if (res){
      return res.rows;
    }
    else {
      return null;
    }
  })
  .then(data => {
    let templateVar = {user: req.session.user_id, data: data }
  res.render("user_search", templateVar)})
  .catch(err => console.error('query error', err.stack));
  // console.log(resultArray);
  // res.render("user_search");
});

router.post('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect("/login");
  }
  db.getCategory(req.body.category)
  .then (res => {
    if (res) {
      return res.rows;
    } else {
      return null;
    }
  })
  .then (data => {
    let templateVar = { user: req.session.user_id, data: data }
    res.render("user_search", templateVar)
  })
  .catch(err => console.error('query error', err.stack));
})

module.exports = router;
