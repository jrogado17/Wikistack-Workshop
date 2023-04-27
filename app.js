const express = require("express");
var morgan = require('morgan')
const client = require("./db");


const app = express();
app.use(morgan('dev'));

const stylesheet = require("./stylesheets/style.css");

app.get("/", (req, res) => {
    console.log("Hello World!");
});

app.use(express.static(path.join(__dirname, "./stylesheets")));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});