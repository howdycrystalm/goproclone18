select products.title, products.price, apparel.color_name, apparel.gender,
pictures.url, pictures.image_view
from products
join apparel
on products.id = apparel.product_id
join pictures
on pictures.product_id = products.id;
