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
    INSERT INTO users (first_name, last_name, email, password, phone_number)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *;`;

  return db.query(queryString, [user.first_name, user.last_name, user.email, user.password, user.phone_number])
}
exports.addUser = addUser;

const getMenu = function(id) {
  return db.query(`SELECT items.id, items.name as item_name, restaurants.name as restaurant_name, items.description as description, items.price as price FROM items
  JOIN menus ON menus.id = menu_id
  JOIN restaurants ON restaurant_id = restaurants.id
  WHERE restaurant_id = $1;`, [id])
}
exports.getMenu = getMenu;

// const getOrders = function(id){
//   return db.query(`SELECT items.name as item_name, restaurants.name as restaurant_name, items.description as description, items.price as price FROM items
//   JOIN menus ON menus.id = menu_id
//   JOIN restaurants ON restaurant_id = restaurants.id
//   WHERE restaurant_id = $1;`, [id]).then(res => {
//     return res.json(res.rows)});
// }
// exports.getOrders = getOrders;

