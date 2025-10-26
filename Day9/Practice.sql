create database practice;

use practice;

create table student(
student_id int primary key auto_increment,
first_name varchar(50),
last_name varchar(50),
age int,
course varchar(50)
);

desc student;

create table course(
course_id int primary key auto_increment,
course_name varchar(50),
duration_month int
);

show tables;

-- Add a new column
alter table student
add column email varchar(50) unique;

-- Modify a column datatype
alter table student
modify column age tinyint;

-- Rename a column
alter table student
change column course course_name varchar(50);

-- Drop a column
alter table student
drop column email;

alter table student
add column email varchar(50);

alter table student
modify column email varchar(50) unique;

desc student;

-- Insert some data
insert into student (student_id, first_name, last_name, age, course_name) 
values 
(1,'Aman', 'Pardeshi', 22, 'Computer Engineering'),
(2,'Riya', 'Patil', 21, 'Information Technology'),
(3,'Sahil', 'Kadam', 23, 'Mechanical Engineering');

-- Display Record
select * from student;


-- Mini Project: Library Deatabase
create table Books(
book_id int primary key auto_increment,
author varchar(50),
price decimal(2,2),
title varchar(50)
);

INSERT INTO Books (book_id, author, price, title)
VALUES
(1,'A.P.J. Abdul Kalam', 299.00, 'Wings of Fire'),
(2,'Robert Kiyosaki', 399.00, 'Rich Dad Poor Dad'),
(3, 'J.K. Rowling', 499.00,'Harry Potter');

truncate table Books;

select * from Books;
------------------------------------------
create table Members(
member_id int primary key,
name varchar(50),
email varchar(50)
);

INSERT INTO Members (member_id, name, email)
VALUES
(1,'Aman Pardeshi', 'aman@gmail.com'),
(2,'Riya Patil', 'riya@gmail.com'),
(3,'Sahil Kadam', 'sahil@gmail.com');


-----------------------------------------
DROP TABLE IF EXISTS BorrowedBooks;

CREATE TABLE BorrowedBooks (
    borrow_id INT PRIMARY KEY AUTO_INCREMENT,
    member_id INT,
    book_id INT,
    borrow_date DATE,
    FOREIGN KEY (member_id) REFERENCES Members(member_id),
    FOREIGN KEY (book_id) REFERENCES Books(book_id)
);

INSERT INTO BorrowedBooks (member_id, book_id, borrow_date)
VALUES
(1, 1, '2025-10-26'),
(2, 3, '2025-10-20'),
(3, 2, '2025-10-22');

SHOW TABLES;

DESC Books;
DESC Members;
DESC BorrowedBooks;

SELECT 
    b.borrow_id,
    m.name AS member_name,
    bk.title AS book_title,
    b.borrow_date
FROM BorrowedBooks b
JOIN Members m ON b.member_id = m.member_id
JOIN Books bk ON b.book_id = bk.book_id;
