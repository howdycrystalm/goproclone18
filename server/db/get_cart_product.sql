SELECT products.id, products.title, products.price, pictures.img_url, pictures.id
FROM products
JOIN pictures
ON products.id = pictures.product_id AND pictures.id = $2
Where products.id = $1;
