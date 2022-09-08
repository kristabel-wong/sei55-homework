
DROP TABLE IF EXISTS movies;


CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    release_date TEXT, 
    runtime TEXT,
    score FLOAT,
    overview TEXT,
    poster_url TEXT,
    cast_id INTEGER
);

-- 4 seeds --

INSERT INTO movies (title, release_date, runtime,score, overview, poster_url,cast_id)
    VALUES (
        'Prey',
        '2022-08-05',
        '1h 40m',
        8.1,
        'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
        'https://image.tmdb.org/t/p/w185/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg',
        2
    );

INSERT INTO movies (title, release_date, runtime,score, overview, poster_url,cast_id)
    VALUES (
        'Thor: Love and Thunder',
        '2022-07-08',
        '1h 59m',
        6.8,
        "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance and stop him before it's too late.",
        'https://image.tmdb.org/t/p/w185/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg',
        1
    );

INSERT INTO movies (title, release_date, runtime,score, overview, poster_url,cast_id)
    VALUES (
        'Jurassic World Dominion',
        '2022-06-09',
        '2h 27m',
        7.1,
        "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.",
        'https://www.themoviedb.org/t/p/w185/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
        3
    );

INSERT INTO movies (title, release_date, runtime,score, overview, poster_url,cast_id)
    VALUES (
        'Rush',
        '2013-10-03',
        '2h 03m',
        7.7,
        "A biographical drama centered on the rivalry between Formula 1 drivers James Hunt and Niki Lauda during the 1976 Formula One motor-racing season.",
        'https://www.themoviedb.org/t/p/w185/uWcMgxO3p3qwVFUxsRz1HbTzGvT.jpg',
        1
    );

INSERT INTO movies (title, release_date, runtime,score, overview, poster_url,cast_id)
    VALUES (
        'Guardians of the Galaxy',
        '2014-08-07',
        '2h 01m',
        7.9,
        "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
        'https://www.themoviedb.org/t/p/w185/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg',
        3
    );


