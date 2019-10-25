
-- users seeds
INSERT INTO users (first_name, last_name, email, password, phone_number, role) VALUES
('Rick', 'Sandchez', 'rick.sandchez@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '1234567890', 'customer'),
('Lisa', 'Simpson', 'lisa.simpson@gmail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '1112131415', 'owner'),
('Link', 'Link', 'link@yahoo.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '1112232415', 'customer'),
('Simon', 'Belmont', 'simon_bel123@mail.ca', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '2122232425', 'owner'),
('Ha', 'Phamo', 'ha@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '2120005555', 'owner'),
('Beast', 'Master', 'thebeastman@mail.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.', '2120008888', 'owner');


-- restaurants seeds
INSERT INTO restaurants (id, image, owner_id, name, category, address, city, province, postal_code, active) VALUES
(1, 'https://i.imgur.com/yijbauJ.jpg', 2, 'Breaking Bread', 'Brunch', '96 Temcumseth St', 'Toronto', 'Ontario', 'M6J2H1', true),
(2, 'https://i.imgur.com/3Dv83Ke.jpg', 4, 'Pasta La Vista', 'Italian', '540 King St W', 'Toronto', 'Ontario', 'M5V1M3', true),
(3, 'https://i.imgur.com/lENwWlJ.jpg', 5, 'Viet Noms', 'Pho', '50 Portland St', 'Toronto', 'Ontario', 'M5V2M7', true),
(4, 'https://i.imgur.com/InZHL25.jpg', 6, 'BaoBao Baby', 'Chinese', '82 Bathurst', 'Toronto', 'Ontario', 'M5V2P3', true);

-- menus seeds
INSERT INTO menus (name, restaurant_id) VALUES
('Breaking Bread Lunch', 1),
('Pasta La Vista Dinner', 2),
('Pho Mekong All Day', 3),
('Lil Menu', 4);

-- orders seeds
INSERT INTO orders(time_entered, time_promised, customer_id, restaurant_id, active) VALUES
('2019-10-20 22:30:33.800', '2019-10-20 22:45:33.800', 1, 1, false),
('2019-10-20 22:40:33.800', '2019-10-20 22:55:34.400', 3, 2, false);

-- items seeds
INSERT INTO items (course, name, description, price, size, menu_id, active) VALUES
('Main', 'Duck Egg Benedict', 'Poached eggs garnished with duck and onion confit, hollandaise sauce, old fashioned mustard', 1989, null, 1, true),
('Main', 'The Little Pigs', 'Poached eggs, roasted pork with salsa verde, black beans, chimichurri, hollandaise sauce', 1684, null, 1, true),
('Main', 'Steak and Eggs', 'Poached eggs, slice of black angus steak bavette, delicious Chateaubriand sauce', 1989, null, 1, true),
('Main', 'Beef tongue', 'Beef tongue, chashu broth, wild mushrooms', 1300, null, 2, true),
('Main', 'Calamari', 'Poached calamari, cabbage, prosciutto oil, basil', 1400, null, 2, true),
('Main', 'Veal Cannellonis', 'Veal cannellonis, squash, pumpkin seed, oat', 1700, null, 2, true),
('Appetizer', 'Crispy Spring Rolls', 'Two of the best spring rolls', 400, null, 3, true),
('Appetizer', 'Shrimp Chips', 'Puffed chips, shrimp flavour', 200, null, 3, true),
('Main', 'Grilled Lemongrass Pork Chop Fried Rice', 'A staple dish! Fried rice accompanied by our delicious meats and vegetables', 1195, null, 3, true),
('Main', 'Tiger Shrimps in Satay Sauce', 'Soft fried noodles with a grand mixture of vegetables, exotic oils, and sauces. Something truly tasty!', 1395, null, 3, true),
('Main', 'Bun bo Hue', 'Spicy Hue Style Vermicelli Beef Soup', 1045, null, 3, true),
('Main', 'Pho tai', 'Rice noodle soup with rare beef', 1095, null, 3, true),
('Main', 'Pho dac biet', 'Rice noodle soup with assorted meat, tripe, tendon', 1095, null, 3, true),
('Main', 'Pho Mekong', 'Rice noodle soup, house special!', 1095, null, 3, true),
('Main', 'Cha Siu Bao', 'Pork buns! Just like tim ho wan', 599, null, 4, true),
('Main', 'Xiao Long Bao', 'Soup filled steamed buns, served with straw', 699, null, 4, true),
('Main', 'Pineapple Bun', 'Bo lo bao, cookie-like crust served with a slice of cold butter', 799, null, 4, true);

-- order_items seeds
INSERT INTO order_items (order_id, item_id, quantity) VALUES
(1, 1, 1),
(2, 2, 1);
