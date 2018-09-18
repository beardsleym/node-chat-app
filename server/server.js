const path = require('path');
const express = require('express');
var app = express();


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT 
app.use(express.static(publicPath));

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server has started!");
});