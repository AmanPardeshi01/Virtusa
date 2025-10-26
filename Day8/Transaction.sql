use javadb;

create table transactionTutorial(
id int auto_increment primary key,
transaction_no int);

insert into transactionTutorial (id, transaction_no)
values (1, 8881);

select * from transactionTutorial;

start transaction;

savepoint save;

insert into transactionTutorial (id, transaction_no)
values (2, 8882), (3, 8883);

select * from transactionTutorial;

rollback to save;

select * from transactionTutorial;

insert into transactionTutorial (id, transaction_no)
values (6, 8886), (7, 8887);

commit;

rollback to save;

