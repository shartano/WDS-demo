"#WDS-demo" 
a Calc App (React + Express + PostgreSQL)
A simple calculator built with React on the frontend, Express.js as the backend, and PostgreSQL as the database.
Numbers are fetched from the database, while operations and calculations are handled in the frontend. 


**Set up the database**

Create a PostgreSQL database and table:

CREATE TABLE Numbs (
  key VARCHAR(5) PRIMARY KEY,
  value INT
);


**Insert some digits:**

INSERT INTO Numbs (key, value) VALUES
('0', 0), ('1', 1), ('2', 2), ('3', 3), ('4', 4),
('5', 5), ('6', 6), ('7', 7), ('8', 8), ('9', 9);

**Run the servers**
# Start backend
cd server
npm start

# Start frontend
cd ../client
npm start


Visit: http://localhost:3001 (frontend) → queries the backend at http://localhost:3000/api/numbs.
