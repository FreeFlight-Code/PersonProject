SELECT Businesses.business_name, Businesses.logo, Businesses.redirect, customers.bus_id, customers.id, customers.name, customers.email, customers.phone, customers.auth
FROM customers
Right JOIN businesses ON Customers.bus_id=Businesses.id
WHERE customers.email = $1;
-- add foreign key to query business info also
-- sample       WHERE bus_id = 6