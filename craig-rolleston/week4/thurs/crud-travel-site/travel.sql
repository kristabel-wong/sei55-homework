
DROP TABLE IF EXISTS travel;

CREATE TABLE travel (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    location TEXT,
    country TEXT,
    description TEXT,
    rating INTEGER,
    visited BOOLEAN,
    image_url TEXT

);

INSERT INTO travel ( location, country, description, rating, visited, image_url )
    VALUES (

        'Annecy',
        'France',
        'Colourful quaint lakeside village',
        9,
        1,
        'https://www.magnificentworld.com/wp-content/uploads/2021/03/Annecy-1.jpg'

    );

INSERT INTO travel ( location, country, description, rating, visited, image_url )
    VALUES (

        'Cappadocia',
        'Turkey',
        'Beautiful with a vibrant history',
        10,
        1,
        'https://www.onthegotours.com/blog/wp-content/uploads/2017/02/dreamstime_m_43701033.jpg'
        
    );    

INSERT INTO travel ( location, country, description, rating, visited, image_url )
    VALUES (

        'Halong Bay',
        'Vietnam',
        'Interesting, welcoming and unique',
        8,
        1,
        'https://media.worldnomads.com/explore/vietnam/halong-bay-vietnam-from-above-gettyimages.jpg'
        
    );       