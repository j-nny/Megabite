SELECT orders.id, orders.quantity, orders.time_entered, orders.time_promised, CONCAT(users.first_name, ' ',  users.last_name) as customer_name, restaurants.name as restaurant_name
FROM orders
JOIN users ON orders.customer_id = users.id
JOIN restaurants ON restaurants.id = orders.restaurant_id
WHERE users.first_name = 'Link'
GROUP BY orders.id, users.first_name, users.last_name, restaurants.name
ORDER BY time_promised;
