const express = require("express");
const router = express.Router({mergeParams: true});

router.get("/home", (req, res) => {
    res.render("student/home");
});

router.get("/register", (req, res) => {
    res.render("student/register");
});

router.post("/register", (req, res) => {
    res.send(req.body);
});

router.get("/login", (req, res) => {
    res.render("student/login");
});

router.post("/login", (req, res) => {
    res.send(req.body);
});









router.get("/edit", (req, res) => {
    res.render("student/edit");
});

router.post("/", (req, res) => {
    
});

module.exports = router;