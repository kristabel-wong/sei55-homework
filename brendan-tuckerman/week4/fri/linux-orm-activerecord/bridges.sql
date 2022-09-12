DROP TABLE IF EXISTS bridges;

CREATE TABLE bridges (

    package_id INTEGER REFERENCES packages(id) ON UPDATE CASCADE,
    distro_id INTEGER REFERENCES distros(id) ON UPDATE CASCADE


);

--Insert two seed data entries
INSERT INTO bridges( package_id, distro_id )
    VALUES (
        1,
        2

    );

INSERT INTO bridges ( package_id, distro_id )
    VALUES (
        1,
        1

    );



