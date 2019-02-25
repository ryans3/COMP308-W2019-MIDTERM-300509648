/* 
File Name: index.js
Authors Name: Ryan Sterling
Student ID: 300509648
Web App Name:https://comp308-w2019-midterm300509648.herokuapp.com/
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: 'books'
   });
});

module.exports = router;
