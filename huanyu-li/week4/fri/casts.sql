
DROP TABLE IF EXISTS casts;


CREATE TABLE casts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    birthday TEXT, 
    place_of_birth TEXT,
    biography TEXT,
    photo_url TEXT
);

-- 3 Seeds --

INSERT INTO casts (name,birthday,place_of_birth,biography,photo_url)
    VALUES (
        'Chris Hemsworth',
        '1983-08-11',
        'Melbourne, Victoria, Australia',
        'Chris Hemsworth (born 11 August 1983) is an Australian actor. He is best known for his roles as Kim Hyde in the Australian TV series Home and Away (2004) and as Thor in the Marvel Cinematic Universe films Thor (2011), The Avengers (2012), Thor: The Dark World (2013), Avengers: Age of Ultron (2015), Thor: Ragnarok (2017), Avengers: Infinity War (2018), Avengers: Endgame (2019), and Thor: Love and Thunder (2022). He has also appeared in the science fiction action film Star Trek(2009), the thriller adventure A Perfect Getaway (2009), the horror comedy The Cabin in the Woods (2012), the dark fantasy action film Snow White and the Huntsman (2012), the war film Red Dawn (2012) and the biographical sports drama film Rush (2013).',
        'https://www.themoviedb.org/t/p/w185/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg'
    );


INSERT INTO casts (name,birthday,place_of_birth,biography,photo_url)
    VALUES (
        'Amber Midthunder',
        '1997-04-26',
        'Santa Fe, New Mexico, U.S.',
        'Amber Midthunder (born April 26, 1997) is a Native American actress. She is known for her main role in the FX series Legion, and appearances in Longmire and Banshee. Amber is an enrolled member of the Fort Peck Sioux Tribe.',
        'https://www.themoviedb.org/t/p/w185/f8VWGyaIS38NkDIzQ2hapXKt0N5.jpg'
    );

INSERT INTO casts (name,birthday,place_of_birth,biography,photo_url)
    VALUES (
        'Chris Pratt',
        '1979-06-21',
        'Virginia, Minnesota, USA',
        "Christopher Michael Pratt (born 21 June 1979) is an American actor, known for starring in both television and action films. He rose to prominence for his television roles, particularly in the NBC sitcom Parks and Recreation (2009-2015), for which he received critical acclaim and was nominated for the Critics' Choice Television Award for Best Supporting Actor in a Comedy Series in 2013. He also starred earlier in his career as Bright Abbott in The WB drama series Everwood (2002-2006) and had roles in Wanted (2008), Jennifer's Body (2009), Moneyball (2011), The Five-Year Engagement (2012), Zero Dark Thirty (2013), Delivery Man (2013), and Her (2013).",
        'https://www.themoviedb.org/t/p/w185/gXKyT1YU5RWWPaE1je3ht58eUZr.jpg'
    );




