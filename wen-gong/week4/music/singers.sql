DROP TABLE IF EXISTS singers;

CREATE TABLE singers( 
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  born TEXT,
  albums TEXT,
  website TEXT,
  image_url TEXT
);

INSERT INTO singers( name, born, albums, website, image_url ) 
VALUES ( 
  'Justin Bieber',
  '	Justin Drew Bieber
  March 1, 1994 (age 28)
  London, Ontario, Canada',
  'Justice
  Purpose',
  'justinbiebermusic.com',
  'https://data.whicdn.com/images/351807967/original.jpg'
  );


INSERT INTO singers( name, born, albums, website, image_url ) 
VALUES ( 
  'Ed Sheeran', 
  '	Edward Christopher Sheeran
  17 February 1991 (age 31)
  Halifax, West Yorkshire, England',
  '÷',
  'edsheeran.com',
  'https://data.whicdn.com/images/327603222/original.jpg'
  );






