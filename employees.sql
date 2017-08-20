CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(25) NOT NULL,
    lastname VARCHAR(25) NOT NULL,
    jobtitle VARCHAR(25) NOT NULL,
	salary integer NOT NULL,
	active VARCHAR(20) NOT NULL

);

DROP TABLE employees;

INSERT INTO employees (firstname, lastname, jobtitle, salary, active)
VALUES ('Ryan', 'Templin', 'Boss', 1000000, 'Y');

DELETE
FROM employees 
WHERE id = 2;

UPDATE employees
SET firstname = 'r', lastname = 't', jobtitle = 'e', salary = '12', active = 'Y'
WHERE id = 2;

SELECT SUM(salary)/12 AS monthly
FROM employees;


