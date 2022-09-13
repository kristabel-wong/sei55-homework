-- Add the cities and information
-- Add the id tag that will link parent to subclass
-- Do not add information it will be linked later on through server.erb


DROP TABLE IF EXISTS cities;

CREATE TABLE cities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  
  name TEXT,
  location TEXT,
  population INTEGER,
  attractions TEXT,
  image_url TEXT, 
  country_id INTEGER
); 


INSERT INTO cities ( name, location, population, attractions,image_url, country_id )
  VALUES (
    'Sydney',
    'NSW',
    5000000,
    'Sydney Harbour',
    'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRLLL35uofakoi43tVjzlWjbtisa6-4XBoJQH5EtirNAgJU61yeVMjgzRZaLk7V8T4s',
    1
  );

INSERT INTO cities ( name, location, population, attractions,image_url, country_id )
  VALUES (
    'Melbourne',
    'Victoria',
    5000000,
    'City Walk',
    'https://www.travelandleisure.com/thmb/Bn5wLoW1H1mO838JBtbqAfPeXcg=/735x0/melbourne-australia-MELBOURNETG0721-62ff9ae2570945ec80160ddf46ee7cb1.jpg',
    1
  );

 INSERT INTO cities ( name, location, population, attractions,image_url, country_id )
  VALUES (
    'Cairo',
    'Capital North',
    21000000,
    'Giza Pyramid',
    'https://media.istockphoto.com/photos/mosque-and-pyramids-picture-id1174818077?k=20&m=1174818077&s=612x612&w=0&h=vAutxzWDTokCJkf6010sguiHP6yc8Nzt8qePG9DEew0=',
    2
  );

 INSERT INTO cities ( name, location, population, attractions,image_url, country_id )
  VALUES (
    'Alexandria',
    'North Mediterranean Port',
    5000000,
    'Lighthouse of Alexandria',
    'https://miro.medium.com/max/1400/1*GeoeYveViehYfUBCu5limw.jpeg',
    2
  );

  INSERT INTO cities ( name, location, population, attractions,image_url, country_id )
  VALUES (
    'Rome',
    'South Captial',
    3000000,
    'Colosseum', 
    'https://a.cdn-hotels.com/gdcs/production40/d811/5e89ad90-8f10-11e8-b6b0-0242ac110007.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    3
  );

  INSERT INTO cities ( name, location, population, attractions,image_url, country_id )
  VALUES (
    'Milan',
    'North Lombardy',
    1300000,
    'Gothic Duomo Cathederal', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeHeBO7P_t3w7cb3t2Q7Zk2S7jNtQC1-Bz0g&usqp=CAU',
    3
  );

  INSERT INTO cities ( name, location, population, attractions,image_url, country_id )
  VALUES (
    'Rio de Janerio',
    'Canine',
    6000000,
    'Atlantic Coast',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsgcxdap3V8bbjrEysQ95mQDIQTEhYNVOiCg&usqp=CAU',
    4
  );

  INSERT INTO cities ( name, location, population, attractions,image_url, country_id )
  VALUES (
    'Sāo Paulo',
    'South east',
    12000000,
   'Martineli Skyscraper',
    'https://traveler.marriott.com/wp-content/uploads/2019/07/Alamy_F3EFXH__Edificio_Copan.jpg',
    4
  );