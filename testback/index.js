const express = require("express");

const app = express();

// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

const port = 8000;
app.get("/", (req, res) => {
  return res.send("hello there ");
});

app.get("/hitesh", (req, res) => {
  res.send("hello hitesh ..");
});
app.get("/shailesh", (req, res) => {
    res.send("hello shailesh ..");
  });
app.get("/signout", (req, res) => {
  res.send("sing out Page");
});
app.listen(port, () => {
  console.log("Server is up and running...");
});
