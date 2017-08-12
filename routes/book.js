var express = require('express');
var routes = express.Router();
var Book = require('../model/book');

//request all of books
routes.get('/books', (req, res)=>{
    Book.find(function(err, books){
        if(err) res.status(500);

        res.json(books);

    });
});

//request specific book
routes.get('/books/:bookname',(req, res)=>{

    Book.findOne({bookname : req.params.bookname}, function(err, book){
        if(err) res.status(500);

        res.json(book);
    });


});


//add new book
routes.post('/books', (req, res)=>{

    console.log('req.body.bookname', req.body.bookname);
    console.log('req.body.booktype', req.body.booktype);
    let bookname = req.body.bookname;
    let booktype = req.body.booktype;
    let book = new Book({
        bookname : bookname,
        booktype : booktype
    });
    book.save((err)=>{
        if(err){
            console.log('book post error');
            res.status(404);
        }
        res.status(200).json({
            success : true
        });


    });
});

//delete specific book
routes.delete('/books',(req, res)=>{
    Book.remove({bookname : req.headers.bookname}, (err ,output)=>{
        if(err) res.status(500).end();
        else
            res.status(200).json({
                success:true
            });

    });
});

//edit specific book
routes.put('/books',(req, res)=>{


});



module.exports = routes;