insert into jobs (jobname, customer_id, password, bus_id, auth)
values ($1, $2, $3, $4);
select * from customers
where email = $1;
