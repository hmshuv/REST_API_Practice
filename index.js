const express = require("express");
const app = express();
const PORT = 9900;

//ROUTES
app.get("/users", (req, res)=>{
    res.end("HEllo! This is home-page.");
})
app.get("/users/:id", (req, req)=>{
    res.end("fetching user by id");
})
app.post("/users", (req,res)=> {
    res.end("adding user");
})
app.patch("/users/:id", (req,res)=> {
    res.end("editing a particular user");
})
app.delete("/users/:id", (req, res)=>{
    res.end("deleting a particular user");
})





app.listen(PORT, (req, res) => console.log(`server listening at port ${PORT}`));