const bcrypt = require('bcrypt');

const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

const getUserWithEmail = function(email) {
  console.log('This is the email entered:',email);
  const queryString = `SELECT * FROM users WHERE email = $1;`
  return db.query(queryString,[email])
  .then(res => {
    console.log("inside this func")
    if(res) {
      console.log(res.rows);
      return res.rows[0];
    } else {
      return null;
    }
  }).catch(err => console.error('query error', err.stack));
}
exports.getUserWithEmail = getUserWithEmail;

const login =  function(email, password) {
   return getUserWithEmail(email)
  .then(user => {
    if (bcrypt.compareSync(password, user.password)) {
      return user;
    }
    console.log('insidegetuserfunc')
    return null;
  });
}
exports.login = login;
