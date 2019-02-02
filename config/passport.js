const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User model
const Student = require('../models/student');
const Investor = require("../models/investor");

module.exports = function(passport) {
  passport.use("student-local",
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match student
      Student.findOne({ email: email })
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            console.log(user);
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );
  
  passport.use("investor-local",
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match investor
      console.log("Reached");
      Investor.findOne({ email: email })
      .then(user => {
        if (!user) {
          console.log("Not found");
          return done(null, false, { message: 'That email is not registered' });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    Student.findById(id, function(err, user) {
      if (!user || user.length) {
        Investor.findById(id, function(err, user) {
          done(err, user);
        });
      } else {   
        done(err, user);
      }
    });
  });
};
