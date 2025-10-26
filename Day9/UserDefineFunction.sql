DELIMITER $$

create function add_numbers(a int, b int)
returns int
deterministic
begin
   declare result int;
   set result = a + b;
   return result;
end$$

DELIMITER ;

select add_numbers(10,20);


delimiter $$

create function calculateBonus(salary decimal(10,2))
returns decimal(10,2)
deterministic
begin
   return salary * 10;
end$$
delimiter ;

select emp_id, emp_name, salary, calculateBonus(salary) as bonus from employeeDetails;

describe employeeDetails;


