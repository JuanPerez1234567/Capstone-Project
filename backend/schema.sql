CREATE DATABASE test;
USE test;

CREATE TABLE testTable(
    id integer PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(20) NOT NULL
);
INSERT INTO testTable (content)
VALUES
('First one'),
('Second one');