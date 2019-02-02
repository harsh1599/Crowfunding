// importing modules
const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const middleware = require("../middleware");

// setting up router
const router = express.Router({mergeParams: true});

// importing models
const Student = require("../models/student");

// routes
router.get("/home", middleware.isStudentLoggedIn, (req, res) => {
    res.render("student/home");
});

router.get("/register", (req, res) => {
    res.render("student/register");
});

router.post("/register", (req, res) => {
    const { email } = req.body;
    
    Student.findOne({ email: email }).then(user => {
        if (user) res.render('register');
        else {
            const newUser = new Student(req.body);
            bcrypt.genSalt(10, (err, salt) => {
                if (err) console.log(err);
                else {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                        .then(user => res.redirect('/student/login'));
                    });
                }
            });
        }
    });
});

router.get("/login", (req, res) => {
    res.render("student/login");
});

router.post('/login', (req, res, next) => {
  passport.authenticate('student-local', {
    successRedirect: '/student/home',
    failureRedirect: '/student/login'
  })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// TODO
router.get("/edit", (req, res) => {
    res.render("student/edit");
});

router.post("/", (req, res) => {

});

module.exports = router;