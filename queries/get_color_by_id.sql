SELECT color
FROM colors
Where product_id = $1
ORDER BY id DESC;
