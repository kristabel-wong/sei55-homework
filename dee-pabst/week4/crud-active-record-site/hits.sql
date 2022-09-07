DROP TABLE IF EXISTS hits;

CREATE TABLE hits (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    album TEXT,
    genre TEXT,
    weeks_at_number_one INTEGER,
    year_released INTEGER,
    spotify_streams INTEGER,
    thumbnail TEXT,
    artist_id INTEGER
);

INSERT INTO hits ( title, album, genre, weeks_at_number_one, year_released, spotify_streams, thumbnail)
VALUES (
    'Shape Of You',
    'Divide',
    'Pop',
    13,
    2017,
    3212000000000,
    'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png'
);

INSERT INTO hits ( title, album, genre, weeks_at_number_one, year_released, spotify_streams, thumbnail)
VALUES (
    'Blinding Lights',
    'After Hours',
    'Synthwave',
    4,
    2019,
    3105000000000,
    'https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png'
);

INSERT INTO hits ( title, album, genre, weeks_at_number_one, year_released, spotify_streams, thumbnail)
VALUES (
    'Dance Monkey',
    'The Kids Are Coming',
    'Electropop',
    22,
    2019,
    2632000000000,
    'https://upload.wikimedia.org/wikipedia/en/1/1f/Dance_Monkey_by_Tones_and_I.jpg'
);