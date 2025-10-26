use javadb;

CREATE VIEW IT_employees AS
SELECT emp_id, emp_name, dept, salary
FROM employeeDetails
WHERE dept = 'IT';

SELECT * FROM employeeDetails;
SELECT * FROM it_employees;

desc employeeDetails;

CREATE OR REPLACE VIEW IT_employees AS
SELECT emp_id, emp_name, dept, salary
FROM employeeDetails
WHERE dept = 'HR';

DROP VIEW it_employees;

select * from employeeDetails;