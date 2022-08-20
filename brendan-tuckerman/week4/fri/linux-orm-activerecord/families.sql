-- Establish Tables for Linux Families
--Based on ther package manager of major distribution


DROP TABLE IF EXISTS families;

CREATE TABLE families (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT,
    file_format TEXT,
    package_manager TEXT, 
    release_year INTEGER


);

--Insert two seed data entries
INSERT INTO families ( description, file_format, package_manager, release_year )
    VALUES (
        'RPM based ',
        '.rpm',
        'RPP Package Manager',
        1995

    );

INSERT INTO families ( description, file_format, package_manager, release_year )
    VALUES (
        'Debian based ',
        '.deb',
        'dpkg Package Manager',
        1993

    );


