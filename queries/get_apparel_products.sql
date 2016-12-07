select * from products
join pictures
on products.id = pictures.product_id
where view = true;
