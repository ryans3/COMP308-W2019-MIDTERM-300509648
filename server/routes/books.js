// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let booksModel = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  booksModel.find((err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  res.render('books/details', {
    title: 'Add a book',
    books: ''
  });


});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/

  let newBook = booksModel({

    "Title": req.body.title,
    "Price": req.body.price,
    "Author": req.body.author,
    "Genre": req.body.genre
  })

  booksModel.create(newBook, (err, booksModel) => {

    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      res.redirect('/books');
    }
  })
});

// GET the Book Details page in order to edit an existing Book
router.get('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
console.log("ANNNNNNNNNNNNYFING");
   let id = req.params.id;
   console.log(id);
   booksModel.findById(id, (err, bookObject) =>{
     if(err){
       console.log(err);
       res.end(err);
     }
     else{
       res.render('books/details',{
         title: "Edit a Book",
         books: bookObject
       });
     }
   })
});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  let id = req.params.id;

  let updatedBook = booksModel({
      "_id": id,
      "Title": req.body.title,
      "Price": req.body.price,
      "Author": req.body.author,
      "Genre": req.body.genre
    })
    booksModel.update({_id:id}, updatedBook, (err, booksModel) => {

      if (err) {
        console.log(err);
        res.send(err);
      }
      else {
        res.redirect('/books');
      }
    })
});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {

  /*****************
   * ADD CODE HERE *
   *****************/
  let id = req.params.id;

  booksModel.remove({_id:id},  (err) => {

    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      res.redirect('/books');
    }
  })
});


module.exports = router;
