--LETSGOOO@O@O@!!!

DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    suffix TEXT,
    location TEXT,
    mbti TEXT,
    availability BOOLEAN,
    likes TEXT,
    dislikes TEXT,
    profile_img TEXT
    
);

INSERT INTO profiles (name, age, suffix, location, mbti, availability, likes, dislikes, profile_img )

    VALUES (
      'Mario',
      41,
      'he/him',
      'Mushroom Kingdom',
      'ESFP',
      1, --1 for true / single
      'Princess Peach, mushrooms, plumbing pipes',
      'Bowser, Waluigi, tortoise shells',
      'https://play.nintendo.com/images/Masthead_Mario_HeroPose-updated2021.b19a16e5.ed4a1562.png'
        
    );

INSERT INTO profiles (name, age, suffix, location, mbti, availability, likes, dislikes, profile_img )

    VALUES (
      'Chun-Li',
      54,
      'she/her',
      'China',
      'ENFJ',
      1, --1 for true / single
      'Marial Arts, Sense of Justice, Being Righteous',
      'Bad guys, M.Bison, Pretty much any villains',
      'https://preview.redd.it/fpq8nzg8n8e61.jpg?auto=webp&s=4ddaf0cf31d2bd923b388460f151e24702e08344'

    );

INSERT INTO profiles (name, age, suffix, location, mbti, availability, likes, dislikes, profile_img )

    VALUES (
      'Geralt of Rivia',
      104,
      'he/him',
      'City of Rivia',
      'ISFP',
      0, --1 for true / single
      'Yennefer, Triss Merigold, Slaying monsters',
      'Portals, Politics, Jasker',
      'https://www.refinery29.com/images/9060813.jpg'

    );

