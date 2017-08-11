var express = require('express');
var router = express.Router();


//route for question collection
router.get('/',(req, res)=>{
    //return all the questions

    res.json({response : "You sent me a Get request"});
});

//route for creating questions
router.post('/question',(req, res)=>{
    //return all the questions

    res.json({
        response : "You sent me a POST request",
        body : req.body
    });
});


module.exports = router;