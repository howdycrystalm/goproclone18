select products.title, products.price, pictures.gender, products.id, products.type, pictures.img_url, pictures.view from products
join pictures
on products.id = pictures.product_id
where view = true and type = 'apparel' and products.id > 3;
