use javadb;

DELIMITER //
CREATE PROCEDURE GetAllUser()
BEGIN
SELECT * FROM customers;
END; 
//

DELIMITER //
CREATE PROCEDURE GetEmployeeDeatils()
BEGIN
  SELECT emp_id, emp_name, salary
  FROM employeeDetails
  where salary = 40000;
END //
DELIMITER ;


DELIMITER $$
CREATE PROCEDURE GetProductName (IN product_price INT, OUT productName VARCHAR(100))
BEGIN
    SELECT product_name INTO productName
    FROM product
    WHERE pid = product_price;
END $$
DELIMITER ;

SET @user_name = "";
CALL GetProductName (9,@productname);
SELECT @productname;


CALL GetAllUser;
CALL GetEmployeeDeatils;
  
select * from product;