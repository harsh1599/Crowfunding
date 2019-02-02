// importing modules
const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const middleware = require("../middleware");

// setting up router
const router = express.Router({mergeParams: true});

// importing models
const Investor = require("../models/investor");

// routes
router.get("/home", middleware.isInvestorLoggedIn, (req, res) => {
    res.render("investor/home");
});

router.get("/register", (req, res) => {
    res.render("investor/register");
});

router.post("/register", (req, res) => {
    const { email } = req.body;
    
    Investor.findOne({ email: email }).then(user => {
        if (user) res.render('register');
        else {
            const newUser = new Investor(req.body);
            bcrypt.genSalt(10, (err, salt) => {
                if (err) console.log(err);
                else {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                        .then(user => res.redirect('/investor/login'));
                    });
                }
            });
        }
    });
});

router.get("/login", (req, res) => {
    res.render("investor/login");
});

router.post('/login', (req, res, next) => {
  passport.authenticate('investor-local', {
    successRedirect: '/investor/home',
    failureRedirect: '/investor/login'
  })(req, res, next);
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// TODO
router.get("/edit", (req, res) => {
    res.render("investor/edit");
});

router.post("/", (req, res) => {

});

router.get("/pagination/:page", (req, res) => {
    Investor.paginate({}, {offset: 4*(Number(req.params.page)-1), limit: 4})
        .then(data => {
            return res.json(data.docs);
        })
        .catch((err) => {return res.json(err);})
});

module.exports = router;