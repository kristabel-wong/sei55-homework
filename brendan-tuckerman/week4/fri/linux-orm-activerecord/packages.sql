DROP TABLE IF EXISTS packages;

CREATE TABLE packages (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    description TEXT


);

--Insert two seed data entries
INSERT INTO packages ( name, description)
    VALUES (
        'Cron',
        ' Cron /Cronie contains the standard UNIX daemon crond that runs specified programs at scheduled times and related tools.'
    );

INSERT INTO packages ( name, description)
    VALUES (
        'Rclone',
        ' Rclone is a command-line program to manage files on cloud storage. It is a feature-rich alternative to cloud vendors web storage interfaces'
    );