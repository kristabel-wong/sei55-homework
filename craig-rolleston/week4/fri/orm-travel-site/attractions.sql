
DROP TABLE IF EXISTS attractions;

CREATE TABLE attractions(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image_url TEXT,
    travel_id INTEGER
);

INSERT INTO attractions(name, image_url) 
    VALUES (
        'Pont des Amours', 
        'https://keepcalmandwander.com/wp-content/uploads/2017/06/Pont-des-Amours-Annecy-France-4.jpg'
    );

INSERT INTO attractions(name, image_url) 
    VALUES (
        'Fairy Chimneys', 
        'https://static1.thetravelimages.com/wordpress/wp-content/uploads/2020/07/Untitled-design-14-1.jpg'
    );

INSERT INTO attractions(name, image_url) 
    VALUES (
        'Sung Sot Cave', 
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/e8/d6/b9/photo2jpg.jpg?w=1000&h=-1&s=1'
    );

INSERT INTO attractions(name, image_url) 
    VALUES (
        'Oistins Fish Fry', 
        'https://image-tc.galaxy.tf/wijpeg-7n6w97pi6fo9ln9ueyh9jejc0/file.jpg'
    );

INSERT INTO attractions(name, image_url) 
    VALUES (
        'Tre Cime di Lavaredo peaks', 
        'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSaVGe13cJhd7V2JGtKMZq7KL4hINP2wgGKBGjeT3sA7OIDrdvgXQD6NHCDvuoQ_120'
    );

INSERT INTO attractions(name, image_url) 
    VALUES (
        'Peacock Island', 
        'https://winnievan.s3.amazonaws.com/uploads/2014/03/P1010853.jpg'
    );   

INSERT INTO attractions(name, image_url) 
    VALUES (
        'Christmas Markets', 
        'https://www.planetware.com/wpimages/2021/03/germany-munich-top-attractions-shop-at-christmas-markets.jpg'
    );

INSERT INTO attractions(name, image_url) 
    VALUES (
        'National Gardens', 
        'https://www.planetware.com/wpimages/2022/03/japan-tokyo-top-attractions-things-to-do-shinjuku-gyoen-national-garden.jpg'
    );         
