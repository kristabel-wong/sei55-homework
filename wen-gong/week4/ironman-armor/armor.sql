
DROP TABLE IF EXISTS armors;


CREATE TABLE armors (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    users TEXT,
    appearances TEXT,
    weapons TEXT,
    special_features TEXT,
    image_url TEXT

);



INSERT INTO armors ( name, users, appearances, weapons,  special_features, image_url)
   VALUES (
     'Mark I',
     'Tony Stark',
     'Iron Man, Iron Man 2, Iron Man 3',
     'Flamethrower, Manually-Deployed Missiles,Electro-Magnetic Gloves',
     'Jet Boots',
     'https://terrigen-cdn-dev.marvel.com/content/prod/1x/iron_man_1.jpg'
   );

INSERT INTO armors ( name, users, appearances, weapons,  special_features, image_url)
   VALUES (
     'Mark II',
     'Tony Stark',
     'Iron Man, Iron Man 2, Iron Man 3, Avengers: Endgame (helmet only)',
     'Repulsors (Repulsion Mark I), Unibeam (Chest Repulsor)',
     'Flaps, Stabilizers, Thruster Systems, Flight Systems, Other Features',
     'https://i.pinimg.com/564x/e8/d2/4b/e8d24becbe2dc25c006ddcbd95004e7c--man-figure-iron-men.jpg'
   );

INSERT INTO armors ( name, users, appearances, weapons,  special_features, image_url)
   VALUES (
     'Mark III',
     'Tony Stark',
     'Iron Man, Iron Man 2, Iron Man 3',
     'Repulsors (Repulsion Mark I), Unibeam (Chest Repulsor), Micro-Missiles (2), Shoulder-Mounted Auto-Aim Guns, Flares',
     'Gold-Titanium Alloy Armor, Thruster Systems, Flight Stabilizers, Flaps, Flight Systems, Other Features',
     'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/47/Iron_Man_Armor_-_Mark_III.png/revision/latest?cb=20170424185316'
   );


