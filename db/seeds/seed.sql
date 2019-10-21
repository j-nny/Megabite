
-- users seeds
INSERT INTO users (first_name, last_name, email, password, phone_number, role) VALUES
('Rick', 'Sandchez', 'rick.sandchez@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '1234567890', 'customer'),
('Lisa', 'Simpson', 'lisa.simpson@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '1112131415', 'owner'),
('Link', 'Link', 'link@yahoo.com', 'hyrule', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', 'customer'),
('Simon', 'Belmont', 'simon_bel123@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '2122232425', 'owner'),
('Pha', 'Hamo', 'ha@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '2120005555', 'owner');

-- restaurants seeds
INSERT INTO restaurants (id, owner_id, name, category, address, city, province, postal_code, active) VALUES
(1, 2, 'Krusty Burger', 'Burgers and fries', '251 Fast-Food Boulevard', 'Springfield', 'Ontario', 'FG5FD5', true),
(2, 4, 'Castlevania', 'Fine dining', '422 Franklin Street East', 'Orangeville', 'Ontario', 'L0N1L0', true),
(3, 5, 'Pho Special', 'Pho', '422 Essa Rd', 'Toronto', 'Ontario', 'M5V2K6', true);

-- menus seeds
INSERT INTO menus (name, restaurant_id) VALUES
('Krusty Burger Lunch', 1),
('Castlevania Dinner', 2),
('Pho Mekong Main', 3);

-- orders seeds
INSERT INTO orders(quantity, time_entered, time_promised, customer_id, restaurant_id, active) VALUES
(1, '2019-10-20 22:30:33.800', '2019-10-20 22:45:33.800', 1, 1, false),
(1, '2019-10-20 22:40:33.800', '2019-10-20 22:55:34.400', 3, 2, false);

-- items seeds
INSERT INTO items (course, name, description, price, size, menu_id, active) VALUES
('Main', 'Krusty Burger', 'A delicious and nutritious Krusty Burger', 20, null, 1, true),
('Main', 'Curry', 'Exquisite dish using a dozen or so spices and simmered for a day and a night.', 500, null, 2, true),
('Appetizer', 'Crispy Spring Rolls', 'Two of the best spring rolls', 400, null, 3, true),
('Appetizer', 'Shrimp Chips', 'Puffed chips, shrimp flavour', 200, null, 3, true),
('Main', 'Grilled Lemongrass Pork Chop Fried Rice', 'A staple dish! Fried rice accompanied by our delicious meats and vegetables', 1195, null, 3, true),
('Main', 'Tiger Shrimps in Satay Sauce', 'Soft fried noodles with a grand mixture of vegetables, exotic oils, and sauces. Something truly tasty!', 1395, null, 3, true),
('Main', 'Bun bo Hue', 'Spicy Hue Style Vermicelli Beef Soup', 1045, null, 3, true),
('Main', 'Pho tai', 'Rice noodle soup with rare beef', 1095, null, 3, true),
('Main', 'Pho dac biet', 'Rice noodle soup with assorted meat, tripe, tendon', 1095, null, 3, true),
('Main', 'Pho Special', 'Rice noodle soup, house special!', 1095, null, 3, true);

-- order_items seeds
INSERT INTO order_items (order_id, item_id, quantity) VALUES
(1, 1, 1),
(2, 2, 1);


