use javadb;

select * from companyDetails;

truncate table companyDetails;

INSERT INTO companyDetails (emp_id, emp_name, emp_roll, emp_department, emp_salary, emp_contact, emp_city)
VALUES
(1, 'John', 'Manager', 'HR', 50000, '2147483647', 'New York'),
(2, 'Emma', 'Developer', 'IT', 60000, '2147483647', 'Chicago'),
(3, 'Liam', 'Designer', 'Marketing', 45000, NULL, 'Los Angeles'),
(4, 'Olivia', 'Developer', 'IT', 62000, '2147483647', 'San Francisco'),
(5, 'Noah', 'Developer', 'IT', 57000, NULL, 'Austin'),
(6, 'Ava', 'Manager', 'Finance', 70000, '2147483647', NULL),
(7, 'Sophia', 'Designer', 'Marketing', 48000, '2147483647', 'Miami'),
(8, 'James', 'Salesman', 'Sales', 40000, NULL, 'Seattle'),
(9, 'Mia', 'Assistant', 'HR', 35000, '2147483647', 'Dallas'),
(10, 'Benjamin', 'Developer', 'IT', 65000, '2147483647', NULL),
(11, 'Charlotte', 'Manager', 'Finance', 75000, '2147483647', 'Atlanta'),
(12, 'Elijah', 'Designer', 'Marketing', 47000, NULL, 'Phoenix'),
(13, 'Amelia', 'Saleswoman', 'Sales', 42000, '2147483647', 'Denver'),
(14, 'Lucas', 'Developer', 'IT', 60000, NULL, 'Portland'),
(15, 'Ethan', 'Manager', 'HR', 52000, '2147483647', 'Dallas'),
(16, 'Grace', 'Developer', 'IT', 58000, NULL, 'New York'),
(17, 'Liam', 'Manager', 'HR', 54000, '2147483647', 'Seattle'),
(18, 'Ava', 'Designer', 'Marketing', 46000, NULL, 'Miami'),
(19, 'Sophia', 'Assistant', 'HR', 35000, '2147483647', NULL),
(20, 'Benjamin', 'Salesman', 'Sales', 30000, NULL, 'Miami'),
(21, 'Daniel', 'Intern', 'IT', 30000, NULL, 'Austin'),
(22, 'Ella', 'Developer', 'IT', 61000, '2147483647', 'Chicago'),
(23, 'Henry', 'Analyst', 'Finance', 55000, NULL, 'New York'),
(24, 'Scarlett', 'Manager', 'HR', 72000, '2147483647', NULL),
(25, 'Jack', 'Designer', 'Marketing', 46000, NULL, 'Phoenix'),
(26, 'Victoria', 'Saleswoman', 'Sales', 43000, '2147483647', 'Dallas'),
(27, 'Leo', 'Assistant', 'Finance', 37000, NULL, 'Houston'),
(28, 'Emily', 'Developer', 'IT', 64000, '2147483647', NULL),
(29, 'Mason', 'Manager', 'Finance', 71000, NULL, 'Atlanta'),
(30, 'Isabella', 'Developer', 'IT', 56000, '2147483647', 'Chicago'),
(31, 'Evelyn', 'Analyst', 'Finance', 50000, '2147483647', 'New York'),
(32, 'Carter', 'Developer', 'IT', 59000, NULL, 'Portland'),
(33, 'Layla', 'Designer', 'Marketing', 47000, '2147483647', NULL),
(34, 'Logan', 'Salesman', 'Sales', 41000, NULL, 'Seattle'),
(35, 'Zoe', 'Assistant', 'HR', 36000, '2147483647', 'Los Angeles');

-- AND operator
select * from companyDetails
where emp_salary = 30000 AND emp_city = 'Miami';

-- OR operator
select * from companyDetails
where emp_roll = 'Developer' OR emp_city = 'Denver';

-- NOT
-- NOT NULL
-- Between
-- IS NULL
-- IS NOT NULL
