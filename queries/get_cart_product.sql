SELECT products.id, products.title, products.price, pictures.url
FROM products
JOIN pictures
ON products.id = pictures.product_id AND pictures.image_view='view1'
Where products.id = $1;
