const express = require("express");
const path = require("path")
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
 app.use('/static',express.static('static'));  //for serving static files

 // FOR SPECIFIC STUFF
app.set('view engine', 'pug')  // Set the Template engine as Pug
app.set('views', path.join(__dirname, 'views'))  // Set the views directory

// Our pug demo endpoint
app.get("/", (req, res)=>{
    res.status(200).render('index.pug', {title: 'Hey', message: 'Hello there!'})
});

//ENDPOINTS
app.get('/', (req,res)=>{
    const con = "This is the best content on the internet so far";
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render(index.pug,params);
}) 


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})