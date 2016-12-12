select products.title, products.price, pictures.gender, products.id, products.type, pictures.img_url, pictures.view from products
join pictures
on products.id = pictures.product_id
where (view = 0 or view = 1) and type = 'apparel' and products.id > 3 order by products.id ASC;
