--This file will create
-- 1. the structure of the 'pets' table
-- 2. several rows of 'seed'/text data to woek with, i.e several sprcific pets


DROP TABLE IF EXISTS pets;



CREATE TABLE pets (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    species TEXT,
    description TEXT,
    roundness INTEGER,
    alive BOOLEAN,
    age INTEGER,
    image_url TEXT


);

INSERT INTO pets ( name, species, description, roundness, alive, age, image_url)
   VALUES (
     'Kermit',
     'Desert Frog',
     'Extremely round, also quite sneaky',
     10, -- profoundly 
     1, -- is alive, i.e. true
     3,
     'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/03/desert-rain-frog-looks-at-camera-featured.jpg'
   );



INSERT INTO pets ( name, species, description, roundness, alive, age, image_url)
   VALUES (
     'Clarence Boddicker',
     'Human',
     'Baddie',
     9,
     0, --ded
     50,
     'https://thenaturalaristocrat.com/wp-content/uploads/2021/06/kurtwood-smith-clarence-boddicker-robocop.jpeg'
   );


INSERT INTO pets ( name, species, description, roundness, alive, age, image_url)
   VALUES (
     'Ruby',
     'Canine',
     'The best dog',
     3,
     1, -- is alive, i.e. true
     6,
     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Nova_Scotia_Duck_Tolling_Retriever_portrait.jpg/250px-Nova_Scotia_Duck_Tolling_Retriever_portrait.jpg'
   );