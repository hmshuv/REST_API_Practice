const express = require("express");
const app = express();
const PORT = 9900;

//ROUTES
app.get("/", (req, res)=>{
    res.end("HEllo! This is home-page.");
})




app.listen(PORT, (req, res) => console.log(`server listening at port ${PORT}`));