var express = require('express');
var router = express.Router();


//route for question collection
router.get('/',(req, res)=>{
    //return all the questions

    res.json({response : "You sent me a Get request"});
});

//route for creating questions
router.post('/',(req, res)=>{
    //return all the questions

    res.json({
        response : "You sent me a POST request",
        body : req.body
    });
});
//route for specific questions
router.get('/:qID',(req, res)=>{
    //return all the questions

    res.json({
        response : "You sent me a GET request ID : "+req.params.qID,
    });
});

//POST /question/:id/answers
//route for specific questions
router.post('/:qID/answers',(req, res)=>{
    //return all the questions

    res.json({
        response : "You sent me a POST request to /answers",
        questionID : req.params.qID,
        body: req.body

    });
});


//PUT /questions/:qID/answers/:aID
//Edit a specific answer

router.put('/:qID/answers/:aID',(req, res)=>{
    //return all the questions

    res.json({
        response : "You sent me a PUT request to /answers",
        questionID : req.params.qID,
        answerID : req.params.aID,
        body: req.body

    });
});



//DELETE /questions/:qID/answers/:aID
//delte a specific answer

router.delete('/:qID/answers/:aID',(req, res)=>{
    //return all the questions

    res.json({
        response : "You sent me a DELETE request to /answers",
        questionID : req.params.qID,
        answerID : req.params.aID
    });
});



//POST /questions/:qID/answers/:aID/vote-up
//POST /questions/:qID/answers/:aID/vote-down
//VOTE a specific answer

router.post('/:qID/answers/:aID/vote-:dir',(req, res)=>{
    //return all the questions

    res.json({
        response : "You sent me a POST request to /vote-"+req.params.dir,
        questionID : req.params.qID,
        answerID : req.params.aID,
        vote : req.params.dir
    });
});



module.exports = router;