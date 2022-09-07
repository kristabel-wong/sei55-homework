-- This file will create
-- 1. the structure of the 'albums' table
-- 2. several rows of 'seed'/test data to work with, i.e. several specific albums

-- By doing this in one file, we only need to run one sqlite3 command to 
-- re-initialise (restart) the whole database if we need to

-- This will nuke (remove) the albums table so we don't even have to
-- run 'rm database.db' before loading this albums.sql file
DROP TABLE IF EXISTS albums;

CREATE TABLE albums (

  id INTEGER PRIMARY KEY AUTOINCREMENT,  -- manage IDs for us; we won't have to specify them
  name TEXT,
  singer_id  INTEGER, 
  released TEXT,
  genre TEXT,
  length INTEGER,
  track_listing TEXT,
  image_url TEXT
       -- each pet knows who it belongs to
  -- we MUST name this field using the singular form of the other table name, plus '_id'
  -- This allows both albums to belong to an owner, AND an owner to have many albums

); 


INSERT INTO albums ( name, singer_id, released, genre, length, track_listing, image_url )
  VALUES (
    'Justice',
    1,
    '19 March, 2021',
    'Pop', 
    45, 
    '2 Much
    Deserve You
    As I Am feat. Khalid
    Off My Face
    Holy feat. Chance the Rapper
    Unstable feat. The Kid Laroi
    MLK Interlude
    Die for You
    Hold On
    Somebody
    Ghost
    Peaches feat. Giveon and Daniel Caesar
    Love You Different feat. Beam
    Loved by You feat. Burna Boy
    Anyone
    Lonely feat. Benny Blanco',
    'https://upload.wikimedia.org/wikipedia/en/0/08/Justin_Bieber_-_Justice.png'
  );

INSERT INTO albums ( name, singer_id, released, genre, length, track_listing, image_url )
  VALUES (
    'Purpose',
    1,
    '13 November, 2015',
    'Pop R&B soul EDM dance-pop', 
    48, 
    'Mark My Words
    Ill Show You
    What Do You Mean?
    Sorry
    Love Yourself
    Company
    No Pressure - Ft. Big Sean
    No Sense - Ft. Travis Scott
    The Feeling - Ft. Halsey
    Live Is Worth Living
    Where Are U Now
    Children
    Purpose', 
    'https://upload.wikimedia.org/wikipedia/en/2/27/Justin_Bieber_-_Purpose_%28Official_Album_Cover%29.png'
  );

INSERT INTO albums ( name, singer_id, released, genre, length, track_listing, image_url )
  VALUES (
    '÷',
    2,
    '3 March 2017',  -- The baddie from Robocop
    'Pop', -- not very round, sadly
    46, -- ded
    'Eraser
    Castle on the Hill
    Dive
    Shape of You
    Perfect
    Galway Girl
    Happier
    New Man
    Heart Don Break Around Here
    What Do I Know?
    How Would You Feel(Paean)
    Supermarket Flowers', 
    'https://upload.wikimedia.org/wikipedia/en/4/45/Divide_cover.png'
  );