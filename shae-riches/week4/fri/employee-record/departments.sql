-- This file will create
-- 1. the structure of the 'departments' table 
-- 2. several rows of 'seed'/test data to work with, i.e. several specific departments
DROP TABLE IF EXISTS departments;

CREATE TABLE departments(

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    employee_count INTEGER,
    budget INTEGER,
    income INTEGER,
    productivity INTEGER

);

INSERT INTO departments ( name, employee_count, budget, income, productivity ) 
    VALUES ( 'Management', 1, 0, 0, 0 );

INSERT INTO departments ( name, employee_count, budget, income, productivity ) 
    VALUES ( 'Records', 1, 100000, 500000, 0 );

INSERT INTO departments ( name, employee_count, budget, income, productivity ) 
    VALUES ( 'Production', 1, 10000000000, 1, 0 )
;
