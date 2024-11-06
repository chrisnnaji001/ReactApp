// import express
const express = require("express");
// create express app instance
const app = express();
const port = 3080;

// drfine route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", (req, res) => {
    res.sendFile(__dirname + "/About.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/Contact.html");
});
// listen port 3080
app.listen(port, () => {
    console.log(`❤😍✌Server is running on port http://localhost:${port}`);
});
