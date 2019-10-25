SELECT orders.time_entered, orders.id as order_id, items.id as item_id, items.name as item_name, order_items.quantity as quantity, users.first_name, users.last_name
FROM restaurants
JOIN orders ON restaurants.id = orders.restaurant_id
JOIN order_items ON orders.id = order_items.order_id
JOIN items ON items.id = order_items.item_id
JOIN users ON orders.customer_id = users.id
WHERE restaurants.id = 2
GROUP BY orders.id, users.first_name, users.last_name, restaurants.name, items.id, order_items.quantity, users.first_name, users.last_name
ORDER BY orders.id;
