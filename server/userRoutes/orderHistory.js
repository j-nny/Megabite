const express = require('express');
const router = express.Router();
const db = require("../database");
// use middleware to add user to res.locals

router.get('/', (req, res) => {
  if (!req.session.user_id) {
    res.redirect("/login")
  }
  db.getOrderHistory(req.session.user_id)
    .then(res => {
      if (res) {
        return res.rows;
      } else {
        return null;
      };
    })
    .then(data => {
      // console.log(data);
      // console.log(Object.keys(data));
      // let duplicates = orderIdArray.filter(function(itm, i){
      //   return orderIdArray.lastIndexOf(itm) === i && orderIdArray.indexOf(itm) != i;
      // });
      console.log(data);
      let orderObject = data.reduce(function(acc, order){
        if(acc[order.order_id]){
          acc = Object.assign(acc, {[order.order_id]: [...acc[order.order_id], order]});
        }
        else{
          acc = Object.assign(acc, {[order.order_id]: [order]});
        }

        return acc
      }, {});
      let properties = Object.keys(orderObject).reverse();

      properties.forEach(function (prop) {
        for (let i = 0; i < orderObject[prop].length; i++){
        console.log(`PropertyName: ${prop}, its Value: ${orderObject[prop][i].order_id}`)
        }
      });

      let templateVar = {
        user: req.session.user_id,
        orderObject,
        properties
      }
      res.render("history", templateVar);
    })
    .catch(err => console.error(err));
});


module.exports = router;
