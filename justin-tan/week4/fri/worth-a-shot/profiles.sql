--LETSGOOOOOOO@!!!

DROP TABLE IF EXISTS profiles;

CREATE TABLE profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    age INTEGER,
    occupation TEXT,
    net_worth INTEGER,
    toxicity TEXT, --convert to number
    interests TEXT,
    profile_img TEXT

);

INSERT INTO profiles (name, age, occupation, net_worth, toxicity, interests, profile_img)
    VALUES (
        'Rick',
        70,
        'Mad Scientist',
        9999999,
        "95",
        'Anything science, blowing up planets, maximizing liver damage',
        'https://pyxis.nymag.com/v1/imgs/bb2/701/c4787eccc4a76307518ae0632fb9196faa-rick-and-morty.rsquare.w700.jpg'

    );

INSERT INTO profiles (name, age, occupation, net_worth, toxicity, interests, profile_img)
    VALUES (
        'Tyrion Lannister',
        30,
        'Hand of the King',
        10000000000,
        "76",
        'Good wine, helping the king, getting drunk',
        'https://i.pinimg.com/originals/cd/0d/43/cd0d43b3d870462a65740f2018e63843.png'

    );

INSERT INTO profiles (name, age, occupation, net_worth, toxicity, interests, profile_img)
    VALUES (
        'Peter Griffin',
        45,
        'The Family Guy',
        5000000,
        "41",
        'Beer, more beer, being best friend with Brian',
        'https://preview.redd.it/9usva24ibbe51.png?auto=webp&s=b0c52eadd9fff8fcbf4ee3b8cdec508f019a5dbd'

    );
