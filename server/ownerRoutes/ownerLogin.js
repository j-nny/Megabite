const express = require('express');
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  if (req.session.user_id) {
    res.redirect("/ownerOrder");
  }
    let templateVar = { user: req.session.user_id };
    res.render("ownerLogin", templateVar);
});

router.post('/', (req, res) => {
  const {email, password} = req.body;
  db.ownerlogin(email, password)
    .then(user => {
      // console.log(user)
      if (!user) {
        res.send("this email or password is incorrect!");
        return;
      } else {
        req.session.user_id = user.id
        res.redirect('/ownerOrder')
      }
    })
    .catch(e => {
      res.render('login', { errors: ['Invalid email or password'] })
    });
});

module.exports = router;
