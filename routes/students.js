// importing modules
const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const middleware = require("../middleware");

// setting up router
const router = express.Router({mergeParams: true});

// importing models
const Student = require("../models/student");
const FundRaiser = require("../models/fundraiser");

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

router.get("/like/:fund_id", (req, res) => {
    FundRaiser.findById(req.params.fund_id, (err, fundraiser) => {
        if (err) return res.json(err);
        else {
            fundraiser.likes += 1;
            fundraiser.save(err => {
                if (err) return res.json(err);
                else {
                    Student.findById(req.user._id, (err, student) => {
                        if (err) return res.json(err);
                        else {
                            student.likedFunds.push(fundraiser._id);
                            student.save(err => {
                                if (err) return res.json(err);
                                else return res.json({ done: true });
                            });
                        }
                    });
                }
            });
        }
    });
});

router.get("/dislike/:fund_id", (req, res) => {
    FundRaiser.findById(req.params.fund_id, (err, fundraiser) => {
        if (err) return res.json(err);
        else {
            fundraiser.likes -= 1;
            fundraiser.save(err => {
                if (err) return res.json(err);
                else {
                    Student.findById(req.user._id, (err, student) => {
                        if (err) return res.json(err);
                        else {
                            student.splice(student.indexOf(fundraiser._id), 1);
                            student.save(err => {
                                if (err) return res.json(err);
                                else return res.json({ done: true });
                            });
                        }
                    });
                }
            });
        }
    });
});

// TODO
router.get("/edit", (req, res) => {
    res.render("student/edit");
});

router.post("/", (req, res) => {

});

module.exports = router;