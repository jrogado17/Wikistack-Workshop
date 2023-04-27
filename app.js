const express = require("express");
var morgan = require('morgan');
const path = require('path'); 
const client = require("./db");
const layout = require('./views/layout');


const app = express();
app.use(morgan('dev'));

// const stylesheet = require("./public/stylesheets/style.css");

app.get ("/", async (req, res) => { // .get route
    console.log("Hello World!");
    await res.send(layout(""))
});

app.use(express.static(path.join(__dirname, "./public")));
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});