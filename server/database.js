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
    if(res) {
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

const populateSideBar = function (){
  // let resultArray = [];
  return db.query(`SELECT * FROM restaurants;`);
}
exports.populateSideBar = populateSideBar;

const addUser =  function(user) {
  const queryString =`
    INSERT INTO users(name, number, email, password)
    VALUES($1, $2, $3, $4)
    RETURNING *;`;

  return db.query(queryString, [user.name, user.number, user.email, user.password])
    .then(res => {
      console.log(user);
      res.rows[0];
    })
    .then(user => {
      return db.query(`SELECT * FROM users WHERE email = $1`, [user.email])
    })
    .catch(err => console.error('query error', err.stack));
}
exports.addUser = addUser;
