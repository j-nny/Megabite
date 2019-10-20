
-- users seeds
INSERT INTO users (first_name, last_name, email, password, phone_number, role) VALUES
('Rick', 'Sandchez', 'rick.sandchez@gmail.com', 'picklerick', '1234567890', 'customer'),
('Lisa', 'Simpson', 'lisa.simpson@gmail.com', 'ehhhhh', '1112131415', 'owner'),
('Link', 'Link', 'link@yahoo.com', 'hyrule', '1617181920', 'customer'),
('Simon', 'Belmont', 'simon_bel123@mail.ca', 'dracula', '2122232425', 'owner');

-- restaurants seeds
INSERT INTO restaurants (id, owner_id, name, category, address, city, province, postal_code, active) VALUES
(1, 2, 'Krusty Burger', 'Burgers and fries', '251 Fast-Food Boulevard', 'Springfield', 'Ontario', 'FG5FD5', true),
(2, 4, 'Castlevania', 'Fine dining', '422 Franklin Street East', 'Orangeville', 'Ontario', 'L0N1L0', true);

-- menus seeds
INSERT INTO menus (name, restaurant_id) VALUES
('Krusty Burger Lunch', 1),
('Castlevania Dinner', 2);

-- orders seeds
INSERT INTO orders(quantity, time_entered, time_promised, customer_id, restaurant_id, active) VALUES
(1, '2019-10-20 22:30:33.800', '2019-10-20 22:45:33.800', 2, 1, false),
(1, '2019-10-20 22:40:33.800', '2019-10-20 22:55:34.400', 4, 2, false);

-- items seeds
INSERT INTO items (course, name, description, price, size, menu_id, active) VALUES
('Lunch', 'Krusty Burger', 'A delicious and nutritious Krusty Burger', 2, null, 1, true),
('Dinner', 'Curry', 'Exquisite dish using a dozen or so spices and simmered for a day and a night.', 5, null, 2, true);

-- order_items seeds
INSERT INTO order_items (order_id, item_id, quantity) VALUES
(1, 1, 1),
(2, 2, 1);


