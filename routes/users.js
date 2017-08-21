var express = require('express');
var router = express.Router();
var https = require('https');
var User = require('../model/user');

// FB.init({
//     appID : '1933880743538683',
//     autoLogAppEvents : true,
//     status : true,
//     xfbml : true,
//     version : '2.9'
// });

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/alluser', function (req, res) {

   User.find((err,users)=>{
       if(err)res.status(500);
       else
           res.json(users);


   });
});

router.post('/social_login_or_signup', function (req, res) {
    var access_token = req.headers.authorization;
    var path = 'https://graph.facebook.com/me?access_token=';
    path = path + access_token;
    console.log(path);


    https.get(path, (response) => {
        //console.log(res);
        console.log('request_facebook_graph');
        response.on('data', (d) => {
            let jsonRes = JSON.parse(d);

            User.findOne({userid: jsonRes.id}, function (err, user) {

                if (err) {
                    //signup
                    console.log('err');
                    res.status(404);
                }
                if(user==null)
                {
                        console.log('signup');
                    let newUser = new User({
                        username: jsonRes.name,
                        userid: jsonRes.id
                    });
                    newUser.save((err)=>{
                        if(err) res.status(404).json({
                           message : 'saving error'
                        });
                        res.status(200).json({
                            success : true
                        });
                    });
                }
                else {
                    //login
                    console.log(user.username);
                    console.log(user.id);
                    console.log('login');
                    res.status(200).json({
                        success : true
                    });
                }

            });
        });

    }).on('error', (e) => {
        console.log(e);
    });
});

router.get('/cookie', (req, res) => {
    res.redirect('/');
});


module.exports = router;
