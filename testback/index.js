const express = require("express");

const app = express();

const port =8000;

app.get("/signup",(req, res)=>{
    return res.send("Sign up page");
    });


app.get("/hitesh",(req, res)=>{
    return res.send("hitesh usage instagram,");
      });

app.get("/login",(req, res)=>{
return res.send("You are visiting login server");
});

app.listen(port, () => {
console.log("Serever is up and running");
});