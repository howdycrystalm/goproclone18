select products.title, products.price, pictures.gender, products.id, pictures.img_url, pictures.view from products
join pictures
on products.id = pictures.product_id
where view = true;
