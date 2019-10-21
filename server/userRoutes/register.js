const express = require('express');
const router = express.Router();
const db = require("../database");
const bcrypt = require("bcrypt");

router.get('/', (req, res) => {
  if (req.session.user_id) {
    res.redirect('/browse');
  } else {
    res.render("login");
  }
});

router.post('/', (req, res) => {
  const user = req.body;
  console.log(user);
  user.password = bcrypt.hashSync(user.password, 12);
  db.addUser(user)
  .then(res => {
    return res.rows[0];
  })
  .then(user => {
    console.log(user);
    req.session.user_id = user.id;
    res.redirect("/browse");
  })
  .catch(e => res.send(e));
});

module.exports = router;
