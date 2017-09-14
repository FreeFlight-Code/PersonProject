insert into customers (email, password, bus_id, auth)
values ($1, $2, $3, 'client');
select * from customers
where email = $1;
