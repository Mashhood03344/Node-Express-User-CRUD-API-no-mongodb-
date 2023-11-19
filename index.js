import express from 'express';
//take in incoming body post requests
import bodyParser from 'body-parser';

import userRoutes from './routers/users.js'

//whole application lies in this variable
const app=express();

//the port that we are going to use 
const PORT = 5000;

//Initiazing bodyParser Midlleware, we are going to be JSON data in our whole application and parse the JSON data using bodyParser
app.use(bodyParser.json());

//Starting path for all the users in the users.js file
app.use('/users', userRoutes)

//creating routes because node and express are all about routing
app.get('/',(req,res) => res.send('Hello from Homepage!')); //testing purposes if it working fine
 //get request with first parameter as the homepage or /, 
// the second parameter is the call back function which uses two parameters
//req and res

//Listening for incoming requests
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

// we will be handling some users in the database in our API
// we are going make five routes 
// the first route is a get request to /users to get all the users in our mock database
// the second is the post request to the /users to create the user
// third route is a post request to /users/id to get the details of a specific user by using the id 
// fourth route is a post request to /users/id to delete a specific user by using the id 
// fifth route is a request to /users/id to update a specific user by using the id 

