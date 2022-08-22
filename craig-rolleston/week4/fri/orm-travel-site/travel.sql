
DROP TABLE IF EXISTS travels;

CREATE TABLE travels (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    location TEXT,
    country TEXT,
    description TEXT,
    rating INTEGER,
    visited BOOLEAN,
    image_url TEXT

);

INSERT INTO travels ( location, country, description, rating, visited, image_url )
    VALUES (

        'Annecy',
        'France',
        'Colourful quaint lakeside village',
        9,
        1,
        'https://www.magnificentworld.com/wp-content/uploads/2021/03/Annecy-1.jpg'

    );

INSERT INTO travels ( location, country, description, rating, visited, image_url )
    VALUES (

        'Cappadocia',
        'Turkey',
        'Beautiful with a vibrant history',
        10,
        1,
        'https://www.onthegotours.com/blog/wp-content/uploads/2017/02/dreamstime_m_43701033.jpg'
        
    );    

INSERT INTO travels ( location, country, description, rating, visited, image_url )
    VALUES (

        'Halong Bay',
        'Vietnam',
        'Interesting, welcoming and unique',
        8,
        1,
        'https://media.worldnomads.com/explore/vietnam/halong-bay-vietnam-from-above-gettyimages.jpg'
        
    );       

INSERT INTO travels ( location, country, description, rating, visited, image_url )
    VALUES (

        'Sandy Lane',
        'Barbados',
        'Welcoming, fun-filled relaxation',
        8,
        1,
        'https://media.cntraveler.com/photos/57fd38358584f8cd20e65ef5/16:9/w_1280,c_limit/mullins.jpg'
    
    );    

INSERT INTO travels ( location, country, description, rating, visited, image_url )
    VALUES (

        'Armetarola',
        'Italy',
        'Picture perfect adventures',
        9,
        1,
        'https://lagazuoi.it/PhGallery/37/3.jpg'
        
    );    

INSERT INTO travels ( location, country, description, rating, visited, image_url )
    VALUES (

        'Dubrovnik',
        'Croatia',
        'Surreal, Historical, Relaxing',
        8,
        1,
        'https://lp-cms-production.imgix.net/2021-06/shutterstockRF_662032261.jpg'
        
    );    

INSERT INTO travels ( location, country, description, rating, visited, image_url )
    VALUES (

        'Munich',
        'Germany',
        'Oktoberfest madness for fresh live-ers',
        7,
        1,
        'https://cdn.theatlantic.com/media/img/photo/2018/09/oktoberfest-2018-photos-from-the-op/m01_1037653488/main_1500.jpg'
        
    );  

INSERT INTO travels ( location, country, description, rating, visited, image_url )
    VALUES (

        'Tokyo',
        'Japan',
        'Full on, wonderful culture immersion',
        8,
        1,
        'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002533/img/basic/a0002533_main.jpg?20210122155600&q=80&rw=750&rh=536'
        
    );      

