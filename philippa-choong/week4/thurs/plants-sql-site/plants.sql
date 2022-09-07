-- this file will create
-- 1. the structure of the 'plants' table
-- 2. several rows of 'seed'/test data to work with, i.e. several specific plants

-- By doing this in one file, we only weed to run one sqlite3 command to 
-- re-initialise (restart) the whole database if we need to


-- this will nuke(remove) the plants table so we dont even have to run 'rm database.db' before loading this plants.sql file
DROP TABLE IF EXISTS plants; 

CREATE TABLE plants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    native_area TEXT,
    perennial BOOLEAN,
    sun_exposure TEXT,
    mature_size INTEGER,
    toxicity TEXT,
    image_url TEXT

);

INSERT INTO plants (name, native_area, perennial, sun_exposure, mature_size, toxicity, image_url)
    VALUES(
        'Angel wing begonia',
        'South America',
        1,
        'Partial shade',
        80,
        'Toxic to dogs and cats',
        'https://www.thespruce.com/thmb/aGjCxEd-F4Zr1iyw8amlP_IjsjI=/700x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/KaraRileyBegoniaMaculata-23H-8652c7a7ce084592a9a386e9d5927acf.jpg'
    );

INSERT INTO plants (name, native_area, perennial, sun_exposure, mature_size, toxicity, image_url)
    VALUES(
        'Gloxinia',
        'Brazil',
        1,
        'Partial to full shade',
        30,
        'Not toxic',
        'https://www.thespruce.com/thmb/y-2SdviiPkrszMwcLASJYfdb6pE=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/grow-senningia-hybrids-indoors-1902487-hero-0cfa2685cbbf41159fe142ca5ee67bf3.jpg'
    );

INSERT INTO plants (name, native_area, perennial, sun_exposure, mature_size, toxicity, image_url)
    VALUES(
        'Round-leaved calathea',
        'South America',
        1,
        'Partial shade',
        80,
        'Not toxic',
        'https://www.thespruce.com/thmb/8C2Xrr5lsNlNkjKZrFfd4TJk7Vo=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/calathea-orbifolia-growing-guide-5270824-hero-2a3b8667f05b40a49b27da573d2486fb.jpg'
    );

    INSERT INTO plants (name, native_area, perennial, sun_exposure, mature_size, toxicity, image_url)
    VALUES(
        'Alocasia silver dragon',
        'Southeast Asia',
        1,
        'Partial shade',
        90,
        'Toxic to people, toxic to pets',
        'https://www.thespruce.com/thmb/z4YcSSTJrfy7WzJXhVBjvcQfoQo=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1366397696-85f3109698e44a7e81e727216037913b.jpg'
    );