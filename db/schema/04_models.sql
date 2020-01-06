-- Creating the models table 

DROP TABLE IF EXISTS models CASCADE;
CREATE TABLE models ( 
  id PRIMARY SERIAL KEY NOT NULL, 
  make_id INTEGER REFERENCES makes (id) ON DELETE CASCADE, 
  model_name VARCHAR(255) NOT NULL 
);
