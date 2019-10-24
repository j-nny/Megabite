SELECT orders.time_entered, orders.time_promised, orders.id as order_id, items.id as item_id, items.name as item_name, order_items.quantity as quantity, restaurants.name as restaurant_name, restaurants.address as address, restaurants.category as category, restaurants.active as active
FROM orders
JOIN users ON orders.customer_id = users.id
JOIN restaurants ON restaurants.id = orders.restaurant_id
JOIN order_items ON orders.id = order_items.order_id
JOIN items ON items.id = order_items.item_id
WHERE users.id = 1
GROUP BY orders.id, users.first_name, users.last_name, restaurants.name, items.id, order_items.quantity, restaurants.address, restaurants.category, restaurants.active
ORDER BY orders.id;
