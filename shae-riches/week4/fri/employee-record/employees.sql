-- This file will create
-- 1. the structure of the 'employee' table 
-- 2. several rows of 'seed'/test data to work with, i.e. several specific employees

-- By doing this in one file, we only need to run one sqlite3 command 
-- to re-initialise (restart) the whole database if we need to

-- this will nuke (delete) the pets table so we don't even have to 
-- run 'rm database.db' before loading this employee.sql file
DROP TABLE IF EXISTS employees;

CREATE TABLE employees(

    id INTEGER PRIMARY KEY AUTOINCREMENT,    -- manage ID num automatically   
    name TEXT,
    image_url TEXT,
    dob DATE,
    home_address TEXT,
    gender TEXT,
    start_date DATE,
    on_contract BOOLEAN,
    contract_length INTEGER,
    full_time BOOLEAN,
    casual BOOLEAN,
    months_employed INTEGER,
    sick_days_accrued INTEGER,
    sick_days_taken INTEGER,
    leave_hrs_accrued INTEGER,
    leave_hrs_taken INTEGER,
    end_date DATE,
    department_id INTEGER

);

INSERT INTO employees ( name, image_url, dob, home_address, gender, start_date, on_contract, contract_length, full_time, casual, months_employed, sick_days_accrued, sick_days_taken, leave_hrs_accrued, leave_hrs_taken, end_date, department_id )--       'Xan Lyppiatt'
    VALUES (
        'Xan Lyppiatt',             -- name
        '/images/na.png',           -- image_url
        '1976-10-04',               -- d.o.b
        '2 Mayfair Av, London',     -- address
        'm',                        -- gender
        '2021-06-12',               -- start_date
        0,                          -- on_contract
        0,                          -- contract_length
        1,                          -- full_time
        0,                          -- casual
        13,                         -- months_employed
        11,                         -- sick_days_accrued  
        11,                         -- sick_days_taken
        494,                        -- leave_accrued
        494,                        -- leave_taken
        null,                       -- end_date
        1                           -- department_id                          

    );
INSERT INTO employees ( name, image_url, dob, home_address, gender, start_date, on_contract, contract_length, full_time, casual, months_employed, sick_days_accrued, sick_days_taken, leave_hrs_accrued, leave_hrs_taken, end_date, department_id )--       'Offred'
    VALUES (
        'Offred',                   -- name
        '/images/offred.webp',      -- image_url
        '1989-10-04',               -- d.o.b
        '5 Gilead st, Cambridge',   -- address
        'f',                        -- gender
        '2005-06-12',               -- start_date
        0,                          -- on_contract
        0,                          -- contract_length
        1,                          -- full_time
        0,                          -- casual
        205,                        -- months_employed
        203,                        -- sick_days_accrued  
        0,                          -- sick_days_taken
        2584,                       -- leave_accrued
        0,                          -- leave_taken
        null,                       -- end_date
        3                           -- department_id                         

    );

INSERT INTO employees ( name, image_url, dob, home_address, gender, start_date, on_contract, contract_length, full_time, casual, months_employed, sick_days_accrued, sick_days_taken, leave_hrs_accrued, leave_hrs_taken, end_date, department_id )--       'Winston Smith'
    VALUES (
        'Winston Smith',                -- name
        '/images/winston.webp',         -- image_url
        '1945-10-04',                   -- d.o.b
        '24 Oxford Street, Cambridge',  -- address
        'm',                            -- gender
        '1962-03-20',                   -- start_date
        0,                              -- on_contract
        0,                              -- contract_length
        1,                              -- full_time
        0,                              -- casual
        725,                            -- months_employed
        719,                            -- sick_days_accrued  
        0,                              -- sick_days_taken
        259200,                         -- leave_accrued
        0,                              -- leave_taken
        null,                              -- end_date
        2                               -- department_id                         

    );

