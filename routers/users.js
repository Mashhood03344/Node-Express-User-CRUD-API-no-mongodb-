import express from 'express';

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

//mock array
// const users= [
//     {
    
//         firstName: "John",
//         lastName: "Doe",
//         age: 12
    
//     },
//     {
    
//         firstName: "Jane",
//         lastName: "Doe",
//         age: 23
    
//     }
// ]

let users=[];

// we are getting an error here becuase all routes are starting with /users/users it is kind of becoming redundant
//router.get('/user',(req,res)

//so instead we use the following. all routes in here are starting with /users
router.get('/',(req,res) => {
    res.json(users);

    res.send('Hello');
});

//adding another route using post.
//we are using post because we are sending data from the front end to the backend not the other way around
//we use post method when creating something
router.post('/',(req,res)=>{
    //deal with some actual data that we are uisng 

    console.log("Post Route Reached");
    const user=req.body;

    //assigning id to the newly added user using uuid
    
    // const userId= uuidv4();

    // const userWithId ={ ...user, id:userId};

    // console.log(req.body); //just for displaying purposes
    
    
    // users.push(userWithId);

    //all of the things above can be shortend as
    users.push({...user, id: uuidv4() })

    res.send(`user with the name ${user.firstName} added to the database`);
    return;
})

//adding another route for getting the details of a specifc person
//the colon in this shows that you are expecting anything from the route after /user
//it is going to hit every time

// /users/2 => req.params { id: 2 }
router.get('/:id',(req,res)=>{

    console.log(req.params);

    const {id} = req.params;

    const foundUser = users.find(user=> user.id ===id);

    res.send(foundUser);
})

//route for deleteing a user
router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    users = users.filter((user)=> user.id!==id);

    res.send(`user with the id ${id} deleted from the database`)
    return;
})

//patch is used for making partial changes while put request method is used for making permanent changes
router.patch('/:id',(req,res)=>{

    const {id} = req.params;
    //getting the user information with the specified id 
    const {firstName, lastName, age} = req.body;

    const userToBeUpdated = users.find((user)=> user.id===id);

    if(firstName){
        userToBeUpdated.firstName=firstName;
    }

    if(lastName){
        userToBeUpdated.lastName=lastName;
    }

    if(age){
        userToBeUpdated.age=age;
    }

    res.send(`User with the ${id} has been updated.`);

    return;
})
export default router; 