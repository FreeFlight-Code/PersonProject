insert into customers (email, password, auth)
values ($1, $2, 'client');
select * from customers
where email = $1;
