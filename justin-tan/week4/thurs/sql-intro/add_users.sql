
-- This is the "create" of CRUD:
-- We want to add some specific user records to our 'users' table,
-- ie add some rows

--this is called seed data- data that you preload into the website
--before its life and users can even create accounts
--so that you can test the website

INSERT INTO users ( id, name, email, password, profile_image, verified, age )
    VALUES (
        1,
        'Luke',
        'luke@ga.co',
        'chicken',
        'http://placekitten.com/200/200',
        1, -- this is actually still a boolean, 1 means true
        100
    );

INSERT INTO users ( id, name, email, password, profile_image, verified, age )
    VALUES (
        2,
        'Kris',
        'kris@ga.co',
        'chicken',
        'http://placekitten.com/400/400',
        0, -- this is actually still a boolean, 1 means true
        20
    );

INSERT INTO users ( id, name, email, password, profile_image, verified, age )
    VALUES (
        3,
        'Shayni',
        'shayni@ga.co',
        'chicken',
        'http://placekitten.com/200/200',
        0, -- this is actually still a boolean, 1 means true
        26
    );
