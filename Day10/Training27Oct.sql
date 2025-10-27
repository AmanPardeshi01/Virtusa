create database tranining27oct;

use tranining27oct;

create table Employee (
id int,
name varchar(50),
department varchar(50),
salary int
);


DELIMITER $$

CREATE PROCEDURE getEmployeeById(IN emp_id INT)
BEGIN
    SELECT * FROM Employee WHERE id = emp_id;
END$$

DELIMITER ;

INSERT INTO Employee (id, name, department, salary)
VALUES (3, 'John Doe', 'IT', 60000);



call getEmployeeById(1);

SHOW CREATE PROCEDURE getEmployeeById;

truncate table employee;

select * from Employee;