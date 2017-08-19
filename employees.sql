CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(25),
    lastname VARCHAR(25),
    jobtitle VARCHAR(25),
	salary integer
);

DROP TABLE employees;

INSERT INTO employees (firstname, lastname, jobtitle, salary)
VALUES ('Ryan', 'Templin', 'Boss', 1000000);

DELETE
FROM employees 
WHERE id = 1;

SELECT SUM(salary)/12 AS monthly
FROM employees;


