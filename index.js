const express = require("express");
const app = express();
const PORT = 9900;
const morgan = require("morgan");
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");



//ROUTES
app.get("/users", (req, res)=>{
    res.status(200).json(users);
    console.log("fetching all users in a json format.")
})
app.get("/users/:id", (req, res)=>{
    res.end("fetching user by id");
})  
app.post("/users", (req,res)=> {
    
})
app.patch("/users/:id", (req,res)=> {
    res.end("editing a particular user");
})
app.delete("/users/:id", (req, res)=>{
    res.end("deleting a particular user");
})





app.listen(PORT, (req, res) => console.log(`server listening at port ${PORT}`));