/* 
File Name: index.js
Authors Name: Ryan Sterling
Student ID: 300509648
Web App Name:
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
    books: 'book'
   });
});

module.exports = router;
