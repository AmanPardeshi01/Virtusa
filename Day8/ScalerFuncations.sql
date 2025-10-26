use javadb;
select UCASE ('aman') as UpperCase_String;
select LCASE ('aman') as LowerCase_String;
select MID("aman pardeshi", 3,7) as Substring;
select LENGTH('aman') as String_Length;
select ROUND(324.46) as Round_Value;
select ROUND(-324.50) as Round_Value;
select ROUND(-324.46876,2) as Round_Value;
select ROUND(-324.46) as Round_Value;
select NOW() as CurrentDateTime;
select format(1234.148995, 3) as Formate_Number;

-- MySQL String Functions

SELECT CONCAT('Hello' , 'World'); -- Result: 'HelloWorld'  Returns text strings concatenated
SELECT INSTR('hello' , 'e'); -- Result: 2  Returns the location of a substring in a string.
SELECT LENGTH('hello'); -- Result: 5 Returns the number of characters of the specified string expression.
SELECT RTRIM(' hello    '); -- Result: ' hello' Returns a character string after truncating all trailing blanks.
SELECT LTRIM('  hello    '); -- Result: 'hello    '  Returns a character expression after it removes leading blanks.
SELECT LTRIM(RTRIM('   ine  '));
SELECT REPLACE('hello' , 'e' , '$'); -- Result: 'h$llo' Replaces all occurrences of a specified string value with another string value.





