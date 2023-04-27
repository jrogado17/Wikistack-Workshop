var app = require('./app');
// const express = require("express");
// var morgan = require('morgan');
// const client = require("./db");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});