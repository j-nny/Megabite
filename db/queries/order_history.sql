SELECT orders.id FROM orders
JOIN users ON orders.customer_id = users.id
WHERE users.first_name = 'Rick';

