CREATE TABLE job (
    id SERIAL,
    jobTitle VARCHAR(100) NOT NULL,
    companyName VARCHAR(50),
    location VARCHAR(50),
    salary INT
);