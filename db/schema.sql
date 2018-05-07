### Schema

CREATE DATABASE burgerDB;
USE burgerDB;

CREATE TABLE burgerdb.burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);