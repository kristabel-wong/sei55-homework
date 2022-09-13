--First we create the DB
-- Then we add some seed data

DROP TABLE IF EXISTS linux_distros; 

CREATE TABLE linux_distros (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    --this will add a new id for each entry
    name TEXT,
    family TEXT,
    source_model TEXT,
    description TEXT,
    latest INTEGER,
    is_rolling BOOLEAN,
    release_date INTEGER,
    logo_url TEXT,
    website TEXT

);

INSERT INTO linux_distros (name, family, source_model, description, latest, is_rolling, release_date, logo_url, website)
    VALUES (
        "paldo",
        "unix",
        "Open source", 
        "Independently developed desktop operating system and package manager (upkg) with a rolling release format and standard Gnome environment. ",
        2205,
        1,
        2004,
        "https://upload.wikimedia.org/wikipedia/commons/9/9e/Paldo-logo.png",
        "www.paldo.org"


    );

    INSERT INTO linux_distros (name, family, source_model, description, latest, is_rolling, release_date, logo_url, website)
    VALUES (
        "KateOS",
        "unix",
        "Open source", 
        "A desktop distribution aimed at intermediate users. It uses Xfce as its default desktop environment. No longer in development.  ",
        3.6,
        0,
        2007,
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/KateOS_%28logo%29.png/250px-KateOS_%28logo%29.png",
        "none"


    );