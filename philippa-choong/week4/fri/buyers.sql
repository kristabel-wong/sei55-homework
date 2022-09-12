DROP TABLE IF EXISTS buyers; 

CREATE TABLE buyers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT
);

INSERT INTO buyers (name, email) VALUES
('Daniel', 'daniel@gmail.com');
INSERT INTO buyers (name, email) VALUES
('Emma', 'emma@gmail.com');
INSERT INTO buyers (name, email) VALUES
('Harry', 'harry@gmail.com');
