//MGDB PW : wjWFj5VVZSo8ggyM
//mongodb+srv://user:<password>@cluster0-uexu7.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dinosaureRoutes = require('./routes/dinosaure')
const friendsRoutes = require('./routes/friend') 

const app = express();

//conexion au DB
mongoose.connect('mongodb+srv://user:wjWFj5VVZSo8ggyM@cluster0-uexu7.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  })

  //to prevent CORS

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  //to tell the system that we're using JSON
  app.use(bodyParser.json());

//register the router
//app.use('/api/auth',dinosaureRoutes);
app.use('/api',dinosaureRoutes);
app.use('/api/friends',friendsRoutes);


  module.exports = app;