drop table employeePractice;
create table employeePractice (
emp_id int primary key,
emp_name varchar(50),
dept varchar(50),
salary double,
experience int,
city varchar(50)
);

INSERT INTO employeePractice (emp_id, emp_name, dept, salary, experience, city) VALUES
(101, 'Raj',   'HR',       45000, 5, 'Chennai'),
(102, 'Meena', 'IT',       60000, 7, 'Bangalore'),
(103, 'Ravi',  'IT',       55000, 6, 'Hyderabad'),
(104, 'Priya', 'Finance',  48000, 4, 'Chennai'),
(105, 'Kiran', 'Sales',    40000, 3, 'Pune'),
(106, 'Arjun', 'IT',       70000, 8, 'Bangalore'),
(107, 'Sneha', 'HR',       50000, 5, 'Mumbai'),
(108, 'Deepa', 'Finance',  52000, 6, 'Delhi');

DESCRIBE employee3;

-- Find employees who earn more than the average salary
select emp_name from employeePractice
where salary > (select avg(salary) from employeePractice);

-- Find employees who earn the highest salary
select emp_name, salary from employeePractice
where salary = (select max(salary) from employeePractice);

-- Find employees who work in the same department as ‘Meena’
select emp_name from employeePractice
where dept = (select dept from employeePractice where emp_name = 'Meena');

-- Find departments where the average salary is greater than 50,000
select dept from employeePractice
group by dept 
having avg(salary)> 50000;

-- Find employees who earn more than ‘Priya’
select emp_name from employeePractice
where salary > (select salary from employeePractice where emp_name = 'Priya');

