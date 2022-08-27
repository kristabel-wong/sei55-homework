--LETSGOOOOOO

DROP TABLE IF EXISTS alcohols;

CREATE TABLE alcohols (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    kind TEXT,
    age INTEGER,
    country TEXT,
    percentage DECIMAL,
    price DECIMAL,
    premium BOOLEAN,
    description TEXT,
    image_url TEXT,
    profile_id INTEGER --MUST NAME THIS field SINGULAR FORM, this allows the alcohol to be only OWNED BY ONE PROFILE. viceversa ONE PROFILE can own MANY ALCOHOLS

);

INSERT INTO alcohols (name, kind, age, country, percentage, price, premium, description, image_url)
    VALUES (
        'Highland Park 18Y.O.',
        'Whiskey',
        18,
        'Scotland',
        40,
        250,
        1, --is premium, ie true
        'Slow burning, aromatic peat with lingering layers of sweet honeyed malt.',
        'https://media.danmurphys.com.au/dmo/product/903546-1.png?impolicy=PROD_LG'

    );

INSERT INTO alcohols (name, kind, age, country, percentage, price, premium, description, image_url)
    VALUES (
        'Victoria Bitter',
        'Beer',
        0,
        'Australia',
        4.9,
        5.0,
        0, --not premium ie false
        "The 'Big Cold Beer', Victoria Bitter has long been Australia's favourite beer.",
        'https://media.danmurphys.com.au/dmo/product/84736-1.png?impolicy=PROD_MD'

    );

INSERT INTO alcohols (name, kind, age, country, percentage, price, premium, description, image_url)
    VALUES (
        'Wynns Coonawarra Estate Shiraz 2019',
        'Wine',
        3,
        'Australia',
        13.8,
        37.99,
        1,
        "Crunchy dark berries with black pepper and some sweeter cinnamon notes, complimented by fine tannins with lively acidity.",
        'https://media.danmurphys.com.au/dmo/product/178229-1.png?impolicy=PROD_LG'

    );