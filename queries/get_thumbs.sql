SELECT pictures.img_url, pictures.gender
FROM products
JOIN pictures
ON products.id = pictures.product_id
Where products.id = $1 AND pictures.gender = $2;