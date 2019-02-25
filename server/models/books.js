/* 
File Name: books.js
Authors Name: Ryan Sterling
Student ID: 300509648
Web App Name:https://comp308-w2019-midterm300509648.herokuapp.com/
*/

let mongoose = require('mongoose');

// create a model class
let gamesSchema = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('books', gamesSchema);
