const express = require("express");

const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/auro', {  useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express()

app.listen(process.env.PORT, ()=>{
    console.log("server is running..");
})