
CREATE TABLE users (
id INT,
profile JSON
);

INSERT INTO users VALUES 
(1, '{"name": "Alice", "skills": ["SQL", "Python"]}'),
(2, '{"name": "Borderland", "skills":["Gaming", "Quiz Solving"]}');

SELECT * from users;

SELECT JSON_EXTRACT (profile, '$.skills[1]') FROM users;

SELECT id, profile->> '$.skills[0]' AS firstskill, profile->> '$.skills[1]' as secondskill from users;
delete from users where id = 1;

drop table users;