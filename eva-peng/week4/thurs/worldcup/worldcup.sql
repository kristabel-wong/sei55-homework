-- create database

DROP TABLE IF EXISTS worldcup;
CREATE TABLE worldcup (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    team TEXT,
    region TEXT,
    group_in TEXT,
    time_in INTEGER,
    host BOOLEAN,
    image_url TEXT
);

INSERT INTO worldcup (team, region, group_in, time_in, host, image_url )
VALUES (
    'QATAR',
    'mid-east',
    'A',
    0,
    1,
    'http://sc04.alicdn.com/kf/Hcbf568aee38344e8a8f877474e997c7d0.jpg'
);

INSERT INTO worldcup (team, region, group_in, time_in, host, image_url )
VALUES (
    'SPAIN',
    'Europe',
    'E',
    15,
    0,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg/400px-Bandera_de_Espa%C3%B1a_%28sin_escudo%29.svg.png'
);

INSERT INTO worldcup (team, region, group_in, time_in, host, image_url )
VALUES (
    'AUSTRALIA',
    'Oceania',
    'D',
    5,
    0,
    'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg'
);


