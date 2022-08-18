-- Create structure of 'cities' table
-- Seed cities

DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    country TEXT,
    population INTEGER,
    demonym TEXT,
    area INTEGER,
    image_url TEXT,
    visited BOOLEAN
);

INSERT INTO cities ( name, country, population, demonym, area, image_url, visited )
    VALUES (
        'Tokyo',
        'Japan',
        13988129,
        'Tokyoite',
        '2194',
        'https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg',
        0
    );

INSERT INTO cities ( name, country, population, demonym, area, image_url, visited )
    VALUES (
        'Delhi',
        'India',
        16787941,
        'Delhiite',
        '1483',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tomb_of_Humayun%2C_Delhi.jpg/2560px-Tomb_of_Humayun%2C_Delhi.jpg',
        0
    );

INSERT INTO cities ( name, country, population, demonym, area, image_url, visited )
    VALUES (
        'Shanghai',
        'China',
        24870895,
        'Shanghainese',
        '6341',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Pudong_Shanghai_November_2017_panorama.jpg/2560px-Pudong_Shanghai_November_2017_panorama.jpg',
        1
    );