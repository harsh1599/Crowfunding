// importing modules
const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');
const session = require('express-session');
const methodOverride = require("method-override");

// passport config
require('./config/passport')(passport);

// connecting to database
mongoose.connect("mongodb://abc:abc123@ds119755.mlab.com:19755/fundraiser");

// setting up the app
const app = express();
app.use(methodOverride('_method'));
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

// adding body parser middleware
app.use(express.urlencoded({ extended: true }));

// express session
app.use(session({ secret: 'wobba_lobba_dub_dub', resave: true, saveUninitialized: true }));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// routes
app.get("/", (req, res) => res.render("landing"));
app.use("/student", require("./routes/students"));
app.use("/investor", require("./routes/investors"));
app.use("/fundraiser", require("./routes/fundraiser"));
app.use("/fundraiser/:id/", require("./routes/review"));



// starting the server
app.listen(process.env.PORT, process.env.IP);