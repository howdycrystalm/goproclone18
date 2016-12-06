select products.title, products.price, apparel.color_name, apparel.gender,
pictures.url, pictures.image_view, products.id, pictures.state
from products
join apparel
on products.id = apparel.product_id
join pictures
on pictures.product_id = products.id order by products.id;
