CREATE TABLE IF NOT EXISTS BUSINESSES (
  business_id SERIAL NOT NULL PRIMARY KEY, 
  logo varchar(255),
  link varchar(255),
  businessname VARCHAR(50)
);
CREATE TABLE IF NOT EXISTS USERS (

  UID SERIAL NOT NULL PRIMARY KEY, 
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  email VARCHAR(50),
  birthday VARCHAR(50),
  password varchar(50) NOT NULL,
  textfield VARCHAR(255),
  auth VARCHAR(50),
  business_id int,
  FOREIGN KEY (BID) REFERENCES BUSINESSES(BID)
);
CREATE TABLE IF NOT EXISTS JOBS (

  job_id SERIAL NOT NULL PRIMARY KEY, 
  businessname VARCHAR(50),
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  textfield VARCHAR(50),
  city VARCHAR(50),
  state VARCHAR(50),
  today DATE,
  jobdate date,
  business_id int,
  customer_id int,
  FOREIGN KEY (BID) REFERENCES BUSINESSES(BID),
  FOREIGN KEY (UID) REFERENCES users(UID)
);