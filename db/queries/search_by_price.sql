SELECT restaurants.* as restaurants, AVG(price) as average_price
FROM restaurants
JOIN menus ON menus.restaurant_id = restaurants.id
JOIN items ON items.menu_id = menus.id
GROUP BY restaurants.id
HAVING AVG(price) < 5;
