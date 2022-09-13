DROP TABLE IF EXISTS artists;

CREATE TABLE artists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    website TEXT,
    image_url TEXT
);

INSERT INTO artists ( name, website, image_url )
VALUES (
    'Ed Sheeran',
    'http://edsheeran.com/',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/440px-Ed_Sheeran-6886_%28cropped%29.jpg'
);

INSERT INTO artists ( name, website, image_url )
VALUES (
    'The Weeknd',
    'http://theweeknd.com/',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/FEQ_July_2018_The_Weeknd_%2844778856382%29_%28cropped%29.jpg/440px-FEQ_July_2018_The_Weeknd_%2844778856382%29_%28cropped%29.jpg'
);

INSERT INTO artists ( name, website, image_url )
VALUES (
    'Tones and I',
    'https://www.tonesandi.com/',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Tones_And_I_%2850118162967%29_%28cropped%29.jpg/440px-Tones_And_I_%2850118162967%29_%28cropped%29.jpg'
);