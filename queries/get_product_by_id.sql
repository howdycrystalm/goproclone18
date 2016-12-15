SELECT *
FROM products
-- JOIN pictures
-- ON products.id = pictures.product_id AND pictures.view = true
Where products.id = $1;
