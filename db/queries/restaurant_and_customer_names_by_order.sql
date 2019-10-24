SELECT orders.id, orders.time_entered, orders.time_promised, CONCAT(users.first_name, ' ',  users.last_name) as customer_name, restaurants.name as restaurant_name
FROM orders
JOIN users ON orders.customer_id = users.id
JOIN restaurants ON restaurants.id = orders.restaurant_id
WHERE users.id = 1 AND restaurant_id = 2
GROUP BY orders.id, users.first_name, users.last_name, restaurants.name
ORDER BY time_entered DESC
LIMIT 1;
