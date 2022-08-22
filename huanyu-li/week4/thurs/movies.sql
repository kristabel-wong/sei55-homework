
DROP TABLE IF EXISTS movies;


CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    release_date TEXT,
    runtime TEXT,
    score FLOAT,
    overview TEXT,
    poster_url TEXT
);

-- 4 seeds --

INSERT INTO movies (title, release_date, runtime,score, overview, poster_url)
    VALUES (
        'Prey',
        '2022-08-05',
        '1h 40m',
        8.1,
        'When danger threatens her camp, the fierce and highly skilled Comanche warrior Naru sets out to protect her people. But the prey she stalks turns out to be a highly evolved alien predator with a technically advanced arsenal.',
        'https://image.tmdb.org/t/p/w185/ujr5pztc1oitbe7ViMUOilFaJ7s.jpg'
    );

INSERT INTO movies (title, release_date, runtime,score, overview, poster_url)
    VALUES (
        'Thor: Love and Thunder',
        '2022-07-08',
        '1h 59m',
        6.8,
        "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher's vengeance and stop him before it's too late.",
        'https://image.tmdb.org/t/p/w185/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg'
    );

INSERT INTO movies (title, release_date, runtime,score, overview, poster_url)
    VALUES (
        'Minions: The Rise of Gru',
        '2022-06-29',
        '1h 27m',
        7.8,
        "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
        'https://image.tmdb.org/t/p/w185/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg'
    );

INSERT INTO movies (title, release_date, runtime,score, overview, poster_url)
    VALUES (
        'Dragon Ball Super: Super Hero',
        '2022-06-11',
        '1h 39m',
        7.5,
        "The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.",
        'https://image.tmdb.org/t/p/w185/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg'
    );


