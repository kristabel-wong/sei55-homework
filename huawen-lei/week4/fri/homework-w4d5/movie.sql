
DROP TABLE IF EXISTS movies;

CREATE TABLE movies(

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    release_year INTEGER,
    director TEXT,
    starring TEXT,
    country TEXT,
    running_time INTEGER,
    watch_or_not BOOLEAN,
    image_url TEXT,
    genre_id INTEGER

);


INSERT INTO movies (name, release_year, director, starring, country, running_time, watch_or_not, image_url)
    VALUES (
        'The Silence of the Lambs',
        1991,
        'Jonathan Demme',
        'Jodie Foster',
        'US',
        118,
        1, -- 1 is true
        'https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg'

    );


INSERT INTO movies (name, release_year, director, starring, country, running_time, watch_or_not, image_url)
VALUES (
    'Seven',
    1995,
    'David Fincher',
    'Brad Pitt',
    'US',
    127,
    1, -- 1 is true
    'https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg'

);


INSERT INTO movies (name, release_year, director, starring, country, running_time, watch_or_not, image_url)
VALUES (
    'The Fall',
    2006,
    'Tarsem Singh',
    'Lee Pace',
    'US',
    117,
    0, -- 1 is true, 0 is false
    'https://upload.wikimedia.org/wikipedia/en/2/26/Fall_ver2.jpg'

);


