CREATE DATABASE IF NOT EXISTS companydb;

use companydb;

CREATE TABLE employee(
    id int(11) NOT NULL AUTO_INCREMENT,
    nombre varchar(45) DEFAULT NULL,
    salario int(5) DEFAULT NULL,
    PRIMARY KEY(id)
)

insert into employee(nombre,salario) values
('Daniel',1000),
('Milagros',2000),
('Oswaldo',3000),
('Hilda',4000);