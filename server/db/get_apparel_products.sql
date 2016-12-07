select * from products
join pictures
on products.id = pictures.product_id
where view = true;



-- select products.title, products.price, pictures.gender, pictures.img_url, apparel.color_hex, colors.color, products.id, pictures.view
-- from products
-- join apparel
-- on products.id = apparel.product_id
-- join pictures
-- on products.id = pictures.product_id
-- join colors
-- on products.id = colors.product_id;
