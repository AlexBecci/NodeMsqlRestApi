CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE
    employee (
        id INT (11) NOT NULL AUTO_INCREMENT,
        name VARCHAR(45) DEFAULT NULL,
        salary INT (5) DEFAULT NULL,
        PRIMARY KEY (id)
    ) DESCRIBE employee;

/* Insercion */
INSERT INTO
    employee
VALUES
    (1, 'jhoe', 1000),
    (2, 'alex', 3000),
    (3, 'maximiliano', 2000),
    (4, 'brian', 10);