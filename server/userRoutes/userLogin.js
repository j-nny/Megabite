const express = require('express');
const router = express.Router();
const db = require("../database");

router.get("/", (req, res) => {
  if (req.session.user_id) {
    res.redirect("/browse");
  } else {
    let templateVars = {
      user_id: req.session.user_id,
      user_name: req.session.user_name,
      user_email: req.session.email,
    };
    res.render("login", templateVars);
  }
});

router.post('/', (req, res) => {
  const {email, password} = req.body;
  db.login(email, password)
    .then(user => {
      console.log(user)
      if (!user) {
        res.send({error: "error"});
        return;
      }
      req.session.user_id = user.id
      res.redirect('/browse')
    })
    .catch(e => {
      // res.send(e);
      res.render('login', { errors: ['Invalid email or password'] })
    });
});

module.exports = router;
