
-- Mountains or Oceans

-- Create a CRUD (Create, Read, Update, Delete) app for either Mountains or Oceans (or anything else that you pick).

-- Make sure to include the following:

--     A page of all records in your database (e.g. all mountains)
--     A page that shows one record (e.g. one mountain)
--     A way to create, update, and delete a record

-- Make sure to use:

--     SQL
--     Seperate your concerns (with views for each action)
--     Use a layout to hold all of your generic code
DROP TABLE IF EXISTS countries;

CREATE TABLE countries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  -- manage IDs for us; we won't have to specify them
  name TEXT,
  location TEXT,
  language TEXT,
  population INTEGER,
  attractions TEXT,
  visit BOOLEAN,
  image_url TEXT
); 

INSERT INTO countries (name, location, language, population, attractions, visit, image_url)
VALUES(
    'Australia',
    'Pacific Ocean',
    'English',
    25000000,
    'Great Barrier Reef',
    1, 
    'https://ichef.bbci.co.uk/news/976/cpsprodpb/D823/production/_119013355_gettyimages-1227936086.jpg'
);

INSERT INTO countries (name, location, language, population, attractions, visit, image_url)
VALUES(
    'Eygpt',
    'North Africa',
    'Arabic',
    102000000,
    'Nile River',
    1,
    'https://res.cloudinary.com/dtpgi0zck/image/upload/s--WxWCMQlD--/c_fill,h_580,w_860/v1/EducationHub/photos/women-and-children-on-the-banks-of-the-nile.webp'
);

INSERT INTO countries (name, location, language, population, attractions, visit, image_url)
VALUES(
    'Italy',
    'South Europe',
    'Italian',
    59000000,
    'Amalfi Coast',
    1,
    'https://a.cdn-hotels.com/gdcs/production22/d554/0eef04a7-c6d5-4d50-bce9-c8fa27187158.jpg?impolicy=fcrop&w=800&h=533&q=medium'
);

INSERT INTO countries (name, location, language, population, attractions, visit, image_url)
VALUES(
    'Brazil',
    'South America',
    'Portuguese',
    290000000,
    'Christ the Redeemer',
    1,
    'https://i.pinimg.com/736x/6f/bc/b6/6fbcb6c3b964126a9cb11356df3695e3.jpg'
);
