const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');

module.exports = function(){
    passport.serializeUser((user,done)=>{
        done(null, user);
    });

    passport.deserializeUser((user,done)=>{
        done(null, user);
    });
};