const express = require("express");
const path = require("path")
const app = express();
const port = 80;

// For serving static files
 app.use('/static',express.static('static'));

 // Set the Template engine as Pug
 app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Our pug demo endpoint
app.get("/demo", (req, res)=>{
    res.status(200).render('demo', {title: 'Hey', message: 'Hello there!'})
});


app.get("/", (req, res)=>{
    res.status(200).send("This is my first express app")
});
app.get("/about", (req, res)=>{
    res.send("This is my about page of first express app")
});
app.post("/this", (req, res)=>{
    res.status(400).send("This page is not found")
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})